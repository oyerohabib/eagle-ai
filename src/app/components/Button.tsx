import Link from "next/link";
import { ButtonProps } from "../types";

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  className = "",
  href = "",
  type,
}) => {
  return (
    <Link href={href}>
      <button
        type={type}
        onClick={onClick}
        className={`px-7 py-3 rounded-3xl font-openSans transition-all btn-gradient text-white cursor-pointer ${className}`}
      >
        {text}
      </button>
    </Link>
  );
};

export default Button;
