import { FeatureList } from "./Feature";

const ComingSection: React.FC = () => {
  const upcomingItems = [
    "Full fund details and officer announcements",
    "TradeDividends program specifics",
    "Institutional partnership roadmap",
    "Regulatory framework overview",
  ];

  return (
    <div className="btn-gradient text-white py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl leading-[72px] font-poppins mb-6">
          Coming Q1 2025
        </h2>

        <div className="max-w-3xl">
          <FeatureList items={upcomingItems} />
        </div>
      </div>
    </div>
  );
};

export default ComingSection;
