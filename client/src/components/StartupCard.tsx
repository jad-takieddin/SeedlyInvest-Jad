import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";
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
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // Get initials for avatar
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <Card className="hover-elevate transition-all duration-200">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-4">
          {/* Company logo placeholder - colored circle with initials */}
          <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
            <span className="text-xl font-bold text-primary">
              {getInitials(startup.name)}
            </span>
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-xl font-semibold text-foreground truncate" data-testid={`text-startup-name-${startup.id}`}>
              {startup.name}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-1" data-testid={`text-description-${startup.id}`}>
              {startup.description}
            </p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Progress bar */}
        <div className="space-y-2">
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-chart-2 transition-all duration-500 ease-out"
              style={{ width: `${progressPercentage}%` }}
              data-testid={`progress-bar-${startup.id}`}
            />
          </div>
          
          {/* Funding metrics */}
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div>
              <p className="text-sm text-muted-foreground">Raised</p>
              <p className="text-lg font-bold text-chart-2" data-testid={`text-raised-${startup.id}`}>
                {formatCurrency(startup.raisedAmount)}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Goal</p>
              <p className="text-lg font-semibold text-muted-foreground" data-testid={`text-goal-${startup.id}`}>
                {formatCurrency(startup.fundingGoal)}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Progress</p>
              <p className="text-lg font-semibold text-foreground" data-testid={`text-progress-${startup.id}`}>
                {progressPercentage.toFixed(0)}%
              </p>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <Button
          onClick={() => onInvest(startup.id)}
          className="w-full"
          data-testid={`button-invest-${startup.id}`}
        >
          <TrendingUp className="w-4 h-4 mr-2" />
          Invest $100
        </Button>
      </CardFooter>
    </Card>
  );
}
