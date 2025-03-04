import Image from "next/image";
import Link from "next/link";
import Logo from "@/app/assets/logo.svg";
import { FaTelegramPlane } from "react-icons/fa";
import { FaMedium, FaXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="text-white py-16 md:py-10 bg-transparent">
      <div className="container mx-auto px-6 flex flex-col md:flex-row gap-6 justify-between items-center">
        <div>
          <Image src={Logo} alt="Eagle AI Logo" width={200} height={30} />
        </div>

        <p className="text-text font-openSans">
          Copyright &copy; {new Date().getFullYear()} Eagle AI
        </p>

        <div className="flex items-center justify-between gap-8">
          <Link href="/" className="text-footer-icons">
            <FaTelegramPlane className="w-6 h-6" />
          </Link>
          <Link href="/" className="text-footer-icons">
            <FaXTwitter className="w-6 h-6" />
          </Link>
          <Link href="/" className="text-footer-icons">
            <FaMedium className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
