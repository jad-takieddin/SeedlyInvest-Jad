import { Card } from "@/components/ui/card";
import { Rocket, DollarSign, Users } from "lucide-react";

interface StatsBannerProps {
  totalStartups: number;
  totalFunded: number;
  activeInvestors: number;
}

export default function StatsBanner({
  totalStartups,
  totalFunded,
  activeInvestors,
}: StatsBannerProps) {
  const formatCurrency = (amount: number) => {
    if (amount >= 1000000) {
      return `$${(amount / 1000000).toFixed(1)}M`;
    }
    if (amount >= 1000) {
      return `$${(amount / 1000).toFixed(0)}K`;
    }
    return `$${amount}`;
  };

  const stats = [
    {
      icon: Rocket,
      label: "Total Startups",
      value: totalStartups.toString(),
      testId: "text-total-startups",
    },
    {
      icon: DollarSign,
      label: "Total Funded",
      value: formatCurrency(totalFunded),
      testId: "text-total-funded",
    },
    {
      icon: Users,
      label: "Active Investors",
      value: activeInvestors.toString(),
      testId: "text-active-investors",
    },
  ];

  return (
    <div className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <Card className="p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center text-center space-y-2"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-1">
                  <p className="text-3xl font-bold text-foreground" data-testid={stat.testId}>
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
