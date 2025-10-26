import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, CheckCircle2 } from "lucide-react";
import type { Startup } from "@shared/schema";

interface StartupCardProps {
  startup: Startup;
  onInvest: (startupId: string) => void;
}

export default function StartupCard({ startup, onInvest }: StartupCardProps) {
  // Calculate funding progress percentage
  const progressPercentage = Math.min(
    (startup.raisedAmount / startup.fundingGoal) * 100,
    100
  );

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // Get initials for avatar
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  // Determine status color based on progress
  const getProgressColor = () => {
    if (progressPercentage >= 75) return "from-green-500 to-emerald-500";
    if (progressPercentage >= 50) return "from-blue-500 to-cyan-500";
    if (progressPercentage >= 25) return "from-yellow-500 to-orange-500";
    return "from-orange-500 to-red-500";
  };

  const isNearGoal = progressPercentage >= 75;

  return (
    <Card className="group relative overflow-hidden border-0 glass-strong hover-lift hover:shadow-glow transition-all duration-500 rounded-2xl">
      {/* Gradient glow on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-gradient-to-b from-primary/20 to-transparent blur-2xl" />
      </div>

      <CardHeader className="pb-4 relative">
        <div className="flex items-start gap-4">
          {/* Company logo with gradient border on hover */}
          <div className="relative group/logo">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 flex items-center justify-center flex-shrink-0 group-hover/logo:scale-110 transition-transform duration-300">
              <span className="text-xl font-bold text-gradient">
                {getInitials(startup.name)}
              </span>
            </div>
            {/* Verified badge for high performers */}
            {isNearGoal && (
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-scale-in">
                <CheckCircle2 className="w-3 h-3 text-white" />
              </div>
            )}
          </div>

          <div className="min-w-0 flex-1">
            <h3
              className="text-xl font-bold text-foreground truncate group-hover:text-primary transition-colors"
              data-testid={`text-startup-name-${startup.id}`}
            >
              {startup.name}
            </h3>
            <p
              className="text-sm text-muted-foreground line-clamp-2 mt-1"
              data-testid={`text-description-${startup.id}`}
            >
              {startup.description}
            </p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6 relative">
        {/* Progress section with premium design */}
        <div className="space-y-3">
          {/* Progress percentage badge */}
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Funding Progress
            </span>
            <span
              className="text-sm font-bold text-gradient"
              data-testid={`text-progress-${startup.id}`}
            >
              {progressPercentage.toFixed(0)}%
            </span>
          </div>

          {/* Modern progress bar with gradient */}
          <div className="relative h-2.5 bg-muted/50 rounded-full overflow-hidden backdrop-blur-sm">
            <div
              className={`h-full bg-gradient-to-r ${getProgressColor()} transition-all duration-1000 ease-out rounded-full relative`}
              style={{ width: `${progressPercentage}%` }}
              data-testid={`progress-bar-${startup.id}`}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
            </div>
          </div>

          {/* Funding metrics in grid */}
          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground font-medium">Raised</p>
              <p
                className="text-lg font-bold text-gradient"
                data-testid={`text-raised-${startup.id}`}
              >
                {formatCurrency(startup.raisedAmount)}
              </p>
            </div>
            <div className="space-y-1 text-right">
              <p className="text-xs text-muted-foreground font-medium">Goal</p>
              <p
                className="text-lg font-bold text-foreground/70"
                data-testid={`text-goal-${startup.id}`}
              >
                {formatCurrency(startup.fundingGoal)}
              </p>
            </div>
          </div>
        </div>

        {/* Status indicator */}
        {isNearGoal && (
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-green-500/10 border border-green-500/20 animate-scale-in">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs font-semibold text-green-600 dark:text-green-400">
              Nearly Funded!
            </span>
          </div>
        )}
      </CardContent>

      <CardFooter className="relative">
        <Button
          onClick={() => onInvest(startup.id)}
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-glow transition-all duration-300 group/btn"
          data-testid={`button-invest-${startup.id}`}
        >
          <TrendingUp className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
          Invest $100
        </Button>
      </CardFooter>

      {/* Decorative corner gradient */}
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-primary/5 to-transparent rounded-tl-full pointer-events-none" />
    </Card>
  );
}

/* Add shimmer animation to the CSS */
