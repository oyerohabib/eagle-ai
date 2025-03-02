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
    <div className="flex flex-col p-5 bg-card text-white rounded-lg w-full max-w-4xl">
      <div className="flex items-start space-x-6">
        {/* Key image */}
        <div className="relative w-32 h-32 flex items-center justify-center rounded-full border border-button-gradient bg-image-container">
          <Image
            src={src}
            alt="Key icon"
            width={45}
            height={45}
            className="object-contain"
          />
        </div>

        {/* Text content */}
        <div className="flex-1">
          <h2 className="text-lg font-poppins leading-7 mb-4">{title}</h2>
          {description && (
            <p className="text-base text-text font-openSans mb-6">
              {description}
            </p>
          )}

          <ul className="space-y-2 mb-8 text-base text-text font-openSans">
            {items?.map((item, index) => (
              <li key={index} className="">
                <span className="mr-2">•</span> {item}
              </li>
            ))}
          </ul>

          {waitlistDeadline && (
            <div className="text-base text-text font-openSans">
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
