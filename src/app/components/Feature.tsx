import Image from "next/image";
import { FeatureListProps, FeatureListItemProps } from "../types";
import Crypto from "@/app/assets/crypto-portal-image.png";

const FeatureListItem: React.FC<FeatureListItemProps> = ({ text }) => {
  return (
    <li className="flex items-start mb-2">
      <span className="text-blue-400 mr-2">•</span>
      <span>{text}</span>
    </li>
  );
};

export const FeatureList: React.FC<FeatureListProps> = ({ items }) => {
  return (
    <ul className="text-gray-300 text-sm">
      {items.map((item, index) => (
        <FeatureListItem key={index} text={item} />
      ))}
    </ul>
  );
};

const FeatureSection: React.FC = () => {
  const features = [
    "Exclusive licensing of Eagle AI Labs' proprietary BTC price prediction algorithms",
    "Significant equity stake in a fully regulated U.S. hedge fund",
    "Management team with proven track record of managing billions in AUM",
    "Full compliance with U.S. regulatory requirements",
    "Strategic timing aligned with anticipated favourable U.S. regulatory environment",
  ];

  return (
    <div className="text-white py-20">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
          <Image
            src={Crypto}
            alt="Eagle AI Crypto Portal"
            width={500}
            height={400}
            className="rounded-lg"
          />
        </div>

        <div className="w-full lg:w-1/2 pl-0 lg:pl-12">
          <h2 className="text-4xl font-bold mb-6">
            A new era in crypto investment
          </h2>

          <p className="text-gray-300 mb-4">
            Our partnership represents a milestone in institutional crypto
            adoption, featuring:
          </p>

          <FeatureList items={features} />
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
