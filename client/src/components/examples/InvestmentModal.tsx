import { useState } from 'react';
import InvestmentModal from '../InvestmentModal';
import { Button } from '@/components/ui/button';

export default function InvestmentModalExample() {
  const [isOpen, setIsOpen] = useState(true);

  const mockStartup = {
    id: '1',
    name: 'TechFlow AI',
    description: 'AI-powered workflow automation',
    fundingGoal: 500000,
    raisedAmount: 325000,
  };

  return (
    <div className="p-8">
      <Button onClick={() => setIsOpen(true)}>Open Investment Modal</Button>
      <InvestmentModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onConfirm={() => {
          console.log('Investment confirmed');
          setIsOpen(false);
        }}
        startup={mockStartup}
      />
    </div>
  );
}
