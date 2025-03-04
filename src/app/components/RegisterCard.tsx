"use client";
import Image from "next/image";
import { motion } from "framer-motion";

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
    <motion.div
      className="flex flex-col p-5 bg-card text-white rounded-lg border border-border w-full max-w-4xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col md:flex-row gap-5 space-y-4 md:space-y-0 md:space-x-6">
        {/* Key image */}
        <motion.div
          className="w-full md:w-auto mx-auto flex md:block items-center justify-center"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative w-28 h-28 flex items-center justify-center rounded-full border border-button-gradient bg-image-container">
            <Image
              src={src}
              alt="Key icon"
              width={35}
              height={35}
              className="object-contain"
            />
          </div>
        </motion.div>

        {/* Text content */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
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
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CryptoWaitlistBanner;
