import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Loader2, TrendingUp, Shield, CheckCircle2 } from "lucide-react";
import type { Startup } from "@shared/schema";

interface InvestmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  startup: Startup | null;
  isPending?: boolean;
}

export default function InvestmentModal({
  isOpen,
  onClose,
  onConfirm,
  startup,
  isPending = false,
}: InvestmentModalProps) {
  if (!startup) return null;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const investmentAmount = 100;
  const newTotal = startup.raisedAmount + investmentAmount;
  const progressPercentage = Math.min(
    (newTotal / startup.fundingGoal) * 100,
    100
  );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        data-testid="modal-investment"
        className="sm:max-w-lg border-0 glass-strong shadow-premium rounded-3xl overflow-hidden animate-scale-in"
      >
        {/* Gradient header background */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-cyan-500/20 blur-3xl" />
        
        <DialogHeader className="relative space-y-3">
          <div className="flex items-center justify-center w-16 h-16 mx-auto bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl shadow-lg">
            <TrendingUp className="w-8 h-8 text-white" />
          </div>
          
          <DialogTitle className="text-2xl font-bold text-center">
            Confirm Your Investment
          </DialogTitle>
          
          <DialogDescription className="text-center text-base">
            You're about to support <span className="font-semibold text-foreground">{startup.name}</span>
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-6 relative">
          {/* Investment amount - premium display */}
          <div className="relative">
            <div className="glass-strong rounded-2xl p-6 border border-white/10 shadow-lg">
              <div className="text-center space-y-2">
                <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                  Investment Amount
                </p>
                <p
                  className="text-5xl font-bold text-gradient"
                  data-testid="text-investment-amount"
                >
                  ${investmentAmount}
                </p>
              </div>
              
              {/* Decorative corner gradients */}
              <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-transparent rounded-tl-2xl" />
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-blue-500/20 to-transparent rounded-br-2xl" />
            </div>
          </div>

          {/* Startup details card */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              Investment Details
            </h4>
            
            <div className="glass rounded-xl p-4 space-y-3 border border-white/5">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Startup</span>
                <span
                  className="text-sm font-semibold text-foreground"
                  data-testid="text-modal-startup-name"
                >
                  {startup.name}
                </span>
              </div>
              
              <div className="h-px bg-border/50" />
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Currently Raised</span>
                <span className="text-sm font-semibold text-foreground">
                  {formatCurrency(startup.raisedAmount)}
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">After Your Investment</span>
                <span className="text-sm font-semibold text-green-600 dark:text-green-400">
                  {formatCurrency(newTotal)}
                </span>
              </div>
              
              <div className="h-px bg-border/50" />
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Funding Goal</span>
                <span className="text-sm font-semibold text-foreground">
                  {formatCurrency(startup.fundingGoal)}
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">New Progress</span>
                <span className="text-sm font-semibold text-primary">
                  {progressPercentage.toFixed(1)}%
                </span>
              </div>
            </div>
          </div>

          {/* Security badges */}
          <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
              <span>Secure Payment</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
              <span>Verified Startup</span>
            </div>
          </div>
        </div>

        <DialogFooter className="gap-3 sm:gap-3 relative">
          <Button
            variant="outline"
            onClick={onClose}
            disabled={isPending}
            className="flex-1 rounded-xl glass border-white/10 hover:bg-white/5"
            data-testid="button-cancel-investment"
          >
            Cancel
          </Button>
          
          <Button
            onClick={onConfirm}
            disabled={isPending}
            className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-glow transition-all duration-300"
            data-testid="button-confirm-investment"
          >
            {isPending ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <CheckCircle2 className="w-4 h-4 mr-2" />
                Confirm Investment
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
