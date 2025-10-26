import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Sparkles } from "lucide-react";

interface HeroProps {
  onExploreClick?: () => void;
}

export default function Hero({ onExploreClick }: HeroProps) {
  return (
    <div className="relative min-h-[85vh] w-full overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 gradient-primary gradient-primary-animate" />
      
      {/* Gradient mesh overlay for depth */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-float" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />
      
      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto text-center space-y-8 animate-slide-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-strong text-white/90 text-sm font-medium shadow-premium animate-scale-in">
            <Sparkles className="w-4 h-4" />
            <span>Empowering the next generation of startups</span>
          </div>
          
          {/* Main heading with refined typography */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight tracking-tight px-4" style={{ animationDelay: '0.1s', letterSpacing: '-0.02em' }}>
            Invest in Tomorrow's
            <br />
            <span className="inline-block mt-2 font-bold">
              <span className="relative">
                Success Stories
                <div className="absolute -inset-1 bg-white/20 blur-xl rounded-lg -z-10" />
              </span>
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-medium px-4" style={{ animationDelay: '0.2s' }}>
            Discover and invest in promising startups. Support entrepreneurs building 
            the future, one innovation at a time.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4" style={{ animationDelay: '0.3s' }}>
            <Button
              size="lg"
              onClick={onExploreClick}
              className="bg-white hover:bg-white/90 text-purple-700 font-semibold text-lg px-8 py-6 rounded-2xl shadow-premium hover-lift group"
              data-testid="button-explore-startups"
            >
              Explore Startups
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="glass-strong border-white/20 hover:border-white/30 text-white font-semibold text-lg px-8 py-6 rounded-2xl hover-lift backdrop-blur-xl"
            >
              <TrendingUp className="mr-2 w-5 h-5" />
              View Performance
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 pt-8 text-white/80 text-sm" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>SEC Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>Verified Startups</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>Secure Transactions</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom fade for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
