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
      label: "Active Startups",
      value: totalStartups.toString(),
      testId: "text-total-startups",
      gradient: "from-purple-500 to-blue-500",
      iconBg: "bg-purple-500/10",
      iconColor: "text-purple-600 dark:text-purple-400",
    },
    {
      icon: DollarSign,
      label: "Capital Raised",
      value: formatCurrency(totalFunded),
      testId: "text-total-funded",
      gradient: "from-blue-500 to-cyan-500",
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-600 dark:text-blue-400",
    },
    {
      icon: Users,
      label: "Investors",
      value: activeInvestors.toLocaleString(),
      testId: "text-active-investors",
      gradient: "from-cyan-500 to-teal-500",
      iconBg: "bg-cyan-500/10",
      iconColor: "text-cyan-600 dark:text-cyan-400",
    },
  ];

  return (
    <div className="py-12 md:py-20 px-4 relative">
      {/* Background glow effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-4xl h-40 bg-primary/5 blur-3xl rounded-full" />
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Glass card with premium shadow */}
        <div className="glass-strong rounded-3xl p-8 md:p-12 shadow-premium hover:shadow-glow transition-all duration-500 border border-white/10 dark:border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="flex flex-col items-center text-center space-y-4 group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon with gradient background */}
                <div className={`relative w-16 h-16 rounded-2xl ${stat.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className={`w-8 h-8 ${stat.iconColor}`} />
                  {/* Glow effect on hover */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`} />
                </div>
                
                {/* Stats */}
                <div className="space-y-2">
                  <p 
                    className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent" 
                    data-testid={stat.testId}
                  >
                    {stat.value}
                  </p>
                  <p className="text-sm md:text-base font-medium text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
      </div>
    </div>
  );
}
