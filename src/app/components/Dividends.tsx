import Image from "next/image";
import DividendsIllustration from "@/app/assets/dividends-illustration.png";
import { FeatureList } from "./Feature";

const DividendsSection: React.FC = () => {
  const benefits = [
    "Exclusive USDC rewards for $EAI stakers",
    "Direct benefit from institutional trading success",
    "Sustainable yield generation backed by hedge fund performance",
  ];

  return (
    <div className="bg-navy-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start mb-16">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-4xl font-bold mb-2">Trade Dividends</h2>
            <h3 className="text-3xl font-light mb-6">Rewarding our comunity</h3>

            <p className="text-gray-300 mb-4">
              This institutional partnership enables the launch of our
              innovative TradeDividends program:
            </p>

            <FeatureList items={benefits} />
          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="bg-gradient-to-r from-blue-600 to-pink-600 p-1 rounded-lg">
              <Image
                src={DividendsIllustration}
                alt="Trade Dividends Illustration"
                width={400}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DividendsSection;
