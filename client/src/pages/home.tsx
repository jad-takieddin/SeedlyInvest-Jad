import { useState } from "react";
import Hero from "@/components/Hero";
import StatsBanner from "@/components/StatsBanner";
import StartupCard from "@/components/StartupCard";
import InvestmentModal from "@/components/InvestmentModal";
import ThemeToggle from "@/components/ThemeToggle";
import type { Startup } from "@shared/schema";

export default function Home() {
  // TODO: remove mock functionality - replace with real API calls
  // Mock data for the prototype - will be replaced with real API data
  const [startups, setStartups] = useState<Startup[]>([
    {
      id: "1",
      name: "TechFlow AI",
      description: "AI-powered workflow automation for modern teams",
      fundingGoal: 500000,
      raisedAmount: 325000,
    },
    {
      id: "2",
      name: "EcoCharge",
      description: "Sustainable charging solutions for electric vehicles",
      fundingGoal: 750000,
      raisedAmount: 180000,
    },
    {
      id: "3",
      name: "HealthBridge",
      description: "Connecting patients with healthcare providers seamlessly",
      fundingGoal: 1000000,
      raisedAmount: 620000,
    },
    {
      id: "4",
      name: "FoodFlex",
      description: "Farm-to-table delivery platform reducing food waste",
      fundingGoal: 400000,
      raisedAmount: 285000,
    },
    {
      id: "5",
      name: "EduPulse",
      description: "Interactive learning platform for remote education",
      fundingGoal: 600000,
      raisedAmount: 445000,
    },
    {
      id: "6",
      name: "FinTrack Pro",
      description: "Smart financial planning for small businesses",
      fundingGoal: 350000,
      raisedAmount: 95000,
    },
  ]);

  const [selectedStartup, setSelectedStartup] = useState<Startup | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPending, setIsPending] = useState(false);

  // Handle invest button click
  const handleInvest = (startupId: string) => {
    const startup = startups.find((s) => s.id === startupId);
    if (startup) {
      setSelectedStartup(startup);
      setIsModalOpen(true);
    }
  };

  // Handle investment confirmation
  const handleConfirmInvestment = () => {
    if (!selectedStartup) return;

    // TODO: remove mock functionality - replace with API call to /api/invest
    setIsPending(true);

    // Simulate API call
    setTimeout(() => {
      // Update the raised amount locally (in real app, this comes from backend)
      setStartups((prev) =>
        prev.map((s) =>
          s.id === selectedStartup.id
            ? { ...s, raisedAmount: s.raisedAmount + 100 }
            : s
        )
      );

      setIsPending(false);
      setIsModalOpen(false);
      setSelectedStartup(null);

      console.log("Investment successful for:", selectedStartup.name);
    }, 800);
  };

  // Calculate stats from current data
  const totalStartups = startups.length;
  const totalFunded = startups.reduce((sum, s) => sum + s.raisedAmount, 0);
  const activeInvestors = 1250; // TODO: remove mock - get from backend

  // Scroll to startups section
  const scrollToStartups = () => {
    document.getElementById("startups-section")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header with theme toggle */}
      <header className="absolute top-0 right-0 z-10 p-4">
        <ThemeToggle />
      </header>

      {/* Hero section */}
      <Hero onExploreClick={scrollToStartups} />

      {/* Stats banner */}
      <StatsBanner
        totalStartups={totalStartups}
        totalFunded={totalFunded}
        activeInvestors={activeInvestors}
      />

      {/* Startups grid section */}
      <section id="startups-section" className="py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Investment Opportunities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse our curated selection of promising startups seeking funding.
              Each investment helps turn innovative ideas into reality.
            </p>
          </div>

          {/* Startups grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {startups.map((startup) => (
              <StartupCard
                key={startup.id}
                startup={startup}
                onInvest={handleInvest}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Investment confirmation modal */}
      <InvestmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmInvestment}
        startup={selectedStartup}
        isPending={isPending}
      />
    </div>
  );
}
