import Image from "next/image";
import Dividends from "@/app/assets/dividends.png";
import Dividends2 from "@/app/assets/dividends-2.png";
import { FeatureList } from "./Feature";

const DividendsSection: React.FC = () => {
  const benefits = [
    "Exclusive USDC rewards for $EAI stakers",
    "Direct benefit from institutional trading success",
    "Sustainable yield generation backed by hedge fund performance",
  ];

  return (
    <div className="text-white lg:py-20 py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start">
          <div className="w-full lg:w-1/2 mb-0 lg:mb-8 order-2 lg:order-1">
            <h2 className="lg:text-5xl text-4xl leading-12 lg:leading-[72px] mb-4 font-poppins">
              Trade Dividends Rewarding our comunity
            </h2>

            <p className="mb-4 font-poppins">
              This institutional partnership enables the launch of our
              innovative TradeDividends program:
            </p>

            <FeatureList items={benefits} />
          </div>

          <div className="w-full lg:w-1/2 flex mb-12 lg:mb-0 justify-center lg:justify-end order-1 lg:order-2">
            <div className="border">
              <div className="hidden md:block">
                <Image
                  src={Dividends}
                  alt="Trade Dividends Illustration"
                  width={400}
                  height={300}
                  className="rounded-lg"
                />
              </div>
              <div className="block md:hidden">
                <Image
                  src={Dividends2}
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
    </div>
  );
};

export default DividendsSection;
