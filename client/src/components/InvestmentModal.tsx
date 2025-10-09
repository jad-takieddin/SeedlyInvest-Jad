import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
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
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent data-testid="modal-investment">
        <DialogHeader>
          <DialogTitle>Confirm Investment</DialogTitle>
          <DialogDescription>
            You are about to invest in {startup.name}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          {/* Investment amount */}
          <div className="bg-muted rounded-lg p-4">
            <p className="text-sm text-muted-foreground mb-1">Investment Amount</p>
            <p className="text-3xl font-bold text-foreground" data-testid="text-investment-amount">
              $100
            </p>
          </div>

          {/* Startup summary */}
          <div className="space-y-2">
            <h4 className="font-semibold text-foreground">Startup Details</h4>
            <div className="space-y-1">
              <div className="flex justify-between gap-4">
                <span className="text-sm text-muted-foreground">Name:</span>
                <span className="text-sm font-medium text-foreground" data-testid="text-modal-startup-name">
                  {startup.name}
                </span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-sm text-muted-foreground">Current Raised:</span>
                <span className="text-sm font-medium text-foreground">
                  {formatCurrency(startup.raisedAmount)}
                </span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-sm text-muted-foreground">Funding Goal:</span>
                <span className="text-sm font-medium text-foreground">
                  {formatCurrency(startup.fundingGoal)}
                </span>
              </div>
            </div>
          </div>
        </div>

        <DialogFooter className="gap-2">
          <Button
            variant="outline"
            onClick={onClose}
            disabled={isPending}
            data-testid="button-cancel-investment"
          >
            Cancel
          </Button>
          <Button
            onClick={onConfirm}
            disabled={isPending}
            data-testid="button-confirm-investment"
          >
            {isPending ? "Processing..." : "Confirm Investment"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
