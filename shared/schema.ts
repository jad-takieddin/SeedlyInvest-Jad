import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Users table (existing)
export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Startups table - stores startup investment opportunities
export const startups = pgTable("startups", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  description: text("description").notNull(),
  fundingGoal: integer("funding_goal").notNull(), // in dollars
  raisedAmount: integer("raised_amount").notNull().default(0), // in dollars
});

// Schema for inserting a new startup
export const insertStartupSchema = createInsertSchema(startups).omit({
  id: true,
});

// Schema for investing in a startup (just the amount for now)
export const investSchema = z.object({
  startupId: z.string(),
  amount: z.number().positive(),
});

export type InsertStartup = z.infer<typeof insertStartupSchema>;
export type Startup = typeof startups.$inferSelect;
export type Investment = z.infer<typeof investSchema>;
