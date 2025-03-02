import Link from "next/link";
import { AlertBannerProps } from "../types";

const AlertBanner: React.FC<AlertBannerProps> = ({ text, linkText, href }) => {
  return (
    <div className="w-full bg-cyan-500 text-navy-900 py-2 px-4 text-center">
      <div className="container mx-auto">
        <span className="font-medium">Eagle AI Labs:</span> {text}{" "}
        <Link href={href} className="font-medium underline">
          {linkText}
        </Link>
      </div>
    </div>
  );
};

export default AlertBanner;
