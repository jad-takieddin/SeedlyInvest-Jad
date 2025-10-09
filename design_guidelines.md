# Seedly Design Guidelines

## Design Approach
**Reference-Based Approach** drawing inspiration from modern fintech platforms (Stripe, Robinhood, AngelList) with emphasis on trust, clarity, and professional aesthetics suitable for investment platforms.

## Core Design Elements

### A. Color Palette

**Dark Mode (Primary):**
- Background: 220 15% 8% (deep navy-charcoal)
- Surface: 220 12% 12% (elevated cards)
- Primary: 210 100% 60% (confident blue - trust signal)
- Success/Growth: 145 65% 55% (mint green for positive metrics)
- Text Primary: 220 10% 95%
- Text Secondary: 220 8% 65%

**Light Mode:**
- Background: 220 15% 98%
- Surface: 0 0% 100%
- Primary: 210 100% 50%
- Success/Growth: 145 70% 45%
- Text Primary: 220 15% 15%
- Text Secondary: 220 10% 50%

### B. Typography
- **Primary Font:** Inter (Google Fonts) - modern, professional, excellent for financial data
- **Headers:** Font weights 700-800, sizes from text-2xl to text-5xl
- **Body:** Font weight 400-500, text-base to text-lg
- **Data/Metrics:** Font weight 600-700, tabular numbers for alignment

### C. Layout System
**Tailwind Spacing Primitives:** 4, 6, 8, 12, 16, 20, 24
- Consistent card padding: p-6 to p-8
- Section spacing: py-12 to py-20
- Component gaps: gap-4 to gap-8

### D. Component Library

**Navigation:**
- Fixed header with blur backdrop (backdrop-blur-md)
- Logo + primary CTA (Sign Up/Login) on desktop
- Mobile hamburger menu

**Startup Cards:**
- Elevated surface with subtle shadow
- Company logo/icon placeholder (64x64px rounded)
- Startup name (text-xl font-semibold)
- One-line description (text-sm text-secondary)
- Funding metrics section:
  - Progress bar (custom, not default) showing raised/goal ratio
  - Raised amount (bold, success color)
  - Goal amount (regular weight, secondary color)
  - Percentage indicator
- Invest button (primary color, full-width on mobile, auto on desktop)

**Investment Interface:**
- Confirmation modal with backdrop overlay
- Clear amount display ($100 fixed in MVP)
- Startup summary recap
- Dual action buttons (Confirm/Cancel)

**Data Display:**
- Grid layout: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Metric cards with icon + value + label pattern
- Real-time update animations (subtle fade/scale on value change)

### E. Animations
**Minimal, Purposeful Motion:**
- Card hover: subtle lift (translate-y-1) + shadow increase
- Investment button: scale on click (95%)
- Success feedback: green checkmark animation (300ms)
- Progress bar: smooth width transition (500ms ease-out)
- No scroll-triggered animations

## Images

**Hero Section:**
- Full-width background image depicting innovation/growth (startup office, diverse founders, tech environment)
- Overlay gradient: from background color (80% opacity) to transparent
- Position: Center-aligned headline + CTA over image
- Height: 60vh on desktop, 50vh on mobile

**Startup Cards:**
- Placeholder for company logos (use colored circles with initials until real logos available)
- Consider adding small thumbnail images for featured startups

## Page Structure

**Landing/Dashboard Page:**
1. **Hero Section** (60vh)
   - Headline: "Invest in Tomorrow's Success Stories"
   - Subheading: Clear value proposition
   - Primary CTA: "Explore Startups" 
   - Background image with overlay

2. **Stats Banner** (py-12)
   - Three-column metrics: Total Startups | Total Funded | Active Investors
   - Dark surface card, centered layout

3. **Startup Grid** (py-20)
   - Section title: "Investment Opportunities"
   - Filter/sort controls (future enhancement placeholder)
   - Responsive grid of startup cards
   - Empty state messaging if no startups

4. **Footer** (py-12)
   - Minimal: Logo, legal links, social placeholders
   - Newsletter signup (email input + subscribe button)

## Accessibility & Quality Standards
- Maintain WCAG AA contrast ratios (4.5:1 minimum)
- All interactive elements have visible focus states (2px ring, primary color)
- Form inputs: consistent border-2, rounded-lg, focus ring
- Loading states for async operations (skeleton screens or spinners)
- Success/error toast notifications (top-right, auto-dismiss)

## Investment Flow UX
1. User clicks "Invest $100" on startup card
2. Modal appears with investment confirmation
3. On confirm: Loading state → Success feedback → Amount updates
4. Progress bar animates to new percentage
5. Optional: Confetti micro-animation on first investment

This design balances professional credibility with modern web aesthetics, ensuring users feel confident making investment decisions while enjoying a polished, intuitive interface.