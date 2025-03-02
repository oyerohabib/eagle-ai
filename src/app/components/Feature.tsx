import Image from "next/image";
import { FeatureListProps, FeatureListItemProps } from "../types";
import Crypto from "@/app/assets/crypto-portal-image.png";

const FeatureListItem: React.FC<FeatureListItemProps> = ({
  text,
  className,
}) => {
  return (
    <li className={`$flex items-start mb-2 ${className}`}>
      <span className={`text-blue-400 mr-2 ${className}`}>•</span>
      <span>{text}</span>
    </li>
  );
};

export const FeatureList: React.FC<FeatureListProps> = ({ items }) => {
  return (
    <ul className={`text-text text-base leading-[22px] font-openSans`}>
      {items.map((item, index) => (
        <FeatureListItem
          key={index}
          text={item}
          className="text-eagle-white text-lg"
        />
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
        <div className="w-full lg:w-2/5 mb-12 lg:mb-0">
          <div className="border">
            <Image
              src={Crypto}
              alt="Eagle AI Crypto Portal"
              width={450}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="w-full lg:w- pl-0 lg:pl-12">
          <h2 className="text-5xl leading-[72px] mb-4 font-poppins">
            A new era in crypto investment
          </h2>

          <p className="mb-4 font-poppins">
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
