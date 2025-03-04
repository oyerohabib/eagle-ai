import Image from "next/image";

interface CryptoWaitlistBannerProps {
  title?: string;
  description?: string;
  waitlistDeadline?: string;
  items?: string[];
  src: string;
}

const CryptoWaitlistBanner: React.FC<CryptoWaitlistBannerProps> = ({
  title,
  description,
  waitlistDeadline,
  items,
  src,
}) => {
  return (
    <div className="flex flex-col p-5 bg-card text-white rounded-lg border border-border w-full max-w-4xl">
      <div className="flex flex-col md:flex-row gap-5 space-y-4 md:space-y-0 md:space-x-6">
        {/* Key image */}
        <div className="w-full md:w-auto mx-auto flex md:block items-center justify-center">
          <div className="relative w-28 h-28 flex items-center justify-center rounded-full border border-button-gradient bg-image-container">
            <Image
              src={src}
              alt="Key icon"
              width={35}
              height={35}
              className="object-contain"
            />
          </div>
        </div>

        {/* Text content */}
        <div className="flex-1">
          <h2 className="text-lg font-poppins leading-7 mb-2 text-center md:text-left">
            {title}
          </h2>
          {description && (
            <p className="text-base text-text font-openSans mb-4 text-left">
              {description}
            </p>
          )}

          <ul className="space-y-2 mb-4 text-base text-text font-openSans text-left">
            {items?.map((item, index) => (
              <li key={index}>
                <span className="mr-2">•</span> {item}
              </li>
            ))}
          </ul>

          {waitlistDeadline && (
            <div className="text-base text-text font-openSans text-left">
              <span className="mr-2">🔒</span> Waitlist Closes:{" "}
              {waitlistDeadline}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CryptoWaitlistBanner;
