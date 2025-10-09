import StartupCard from '../StartupCard';

export default function StartupCardExample() {
  const mockStartup = {
    id: '1',
    name: 'TechFlow AI',
    description: 'AI-powered workflow automation for modern teams',
    fundingGoal: 500000,
    raisedAmount: 325000,
  };

  return (
    <div className="p-8 max-w-md">
      <StartupCard 
        startup={mockStartup} 
        onInvest={(id) => console.log('Invest clicked for:', id)} 
      />
    </div>
  );
}
