// import Image from "next/image";

import CryptoWaitlistBanner from "./RegisterCard";
import Key from "@/app/assets/key.svg";
import Badge from "@/app/assets/badge.svg";
import Input from "./Input";
import Button from "./Button";

const RegistrationSection: React.FC = () => {
  return (
    <section className="bg-navy-900 py-16 relative overflow-hidden">
      {/* Background geometric shapes - implemented as absolute positioned divs */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-navy-800/30 transform -skew-x-12"></div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-5xl leading-[72px] mb-8 text-white font-poppins">
          Limited Availability - Register now to join wait List
        </h2>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-3/5 space-y-6">
            {/* Cards banner */}
            <CryptoWaitlistBanner
              src={Key}
              title="Limited Access Available"
              description="Be among the first to access institutional-grade crypto investment opportunities. Our exclusive waitlist is now open for:"
              waitlistDeadline="January 31, 2025"
              items={["Early Community Members", "Active $EAI Holders"]}
            />

            <CryptoWaitlistBanner
              src={Badge}
              title="Benefits of signing up early"
              items={[
                "Priority access when the fund launches",
                "Early information about TradeDividends",
                "Exclusive insights from our institutional trading team",
                "Special allocation opportunities",
              ]}
            />
          </div>

          <div className="w-full lg:w-2/5">
            <form className="w-full">
              <div className="space-y-8">
                <Input name="firstName" placeholder="First Name" type="text" />
                <Input name="lastName" placeholder="Last Name" type="text" />
                <Input name="email" placeholder="Email" type="email" />
                <Input
                  name="telegramUser"
                  placeholder="Telegram User"
                  type="text"
                />
              </div>

              <div className="flex justify-end mt-8">
                <Button text="Register your interest now" type="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
