import StatsBanner from '../StatsBanner';

export default function StatsBannerExample() {
  return (
    <div className="p-4">
      <StatsBanner
        totalStartups={24}
        totalFunded={3500000}
        activeInvestors={1250}
      />
    </div>
  );
}
