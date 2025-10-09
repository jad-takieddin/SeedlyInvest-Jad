import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@assets/stock_images/investment_growth_ch_a209cad5.jpg";

interface HeroProps {
  onExploreClick?: () => void;
}

export default function Hero({ onExploreClick }: HeroProps) {
  return (
    <div className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Investment growth and success"
          className="w-full h-full object-cover"
        />
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/80 to-background/70" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground drop-shadow-lg">
            Invest in Tomorrow's Success Stories
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto drop-shadow-md">
            Discover promising startups and be part of the next big innovation. 
            Support entrepreneurs building the future.
          </p>
          <div className="pt-4">
            <Button
              size="lg"
              onClick={onExploreClick}
              className="bg-primary/90 backdrop-blur-sm hover:bg-primary text-primary-foreground"
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
