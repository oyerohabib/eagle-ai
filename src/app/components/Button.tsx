import Link from "next/link";
import { ButtonProps } from "../types";

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  className = "",
  href = "",
}) => {
  return (
    <Link href={href}>
      <button
        onClick={onClick}
        className={`px-7 py-3 rounded-3xl font-medium transition-all btn-gradient text-white cursor-pointer ${className}`}
      >
        {text}
      </button>
    </Link>
  );
};

export default Button;
