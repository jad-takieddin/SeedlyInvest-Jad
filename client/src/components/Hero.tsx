import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@assets/stock_images/investment_growth_ch_a209cad5.jpg";

interface HeroProps {
  onExploreClick?: () => void;
}

export default function Hero({ onExploreClick }: HeroProps) {
  return (
    <div className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
      {/* Background image with adaptive overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Investment growth and success"
          className="w-full h-full object-cover"
        />
        {/* Light mode: blue overlay, Dark mode: dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-primary/50 to-primary/60 dark:from-background/90 dark:via-background/85 dark:to-primary/40" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white dark:text-foreground drop-shadow-2xl">
            Invest in Tomorrow's Success Stories
          </h1>
          <p className="text-lg md:text-xl text-white/95 dark:text-muted-foreground max-w-2xl mx-auto drop-shadow-lg">
            Discover promising startups and be part of the next big innovation. 
            Support entrepreneurs building the future.
          </p>
          <div className="pt-4">
            <Button
              size="lg"
              onClick={onExploreClick}
              className="bg-white dark:bg-card text-primary dark:text-foreground hover:bg-white/90 dark:hover:bg-card/90 font-semibold shadow-2xl"
              data-testid="button-explore-startups"
            >
              Explore Startups
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
