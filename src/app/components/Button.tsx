import { ButtonProps } from "../types";

const Button: React.FC<ButtonProps> = ({
  text,
  primary = false,
  onClick,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 rounded-full font-medium transition-all ${
        primary
          ? "bg-blue-500 text-white hover:bg-blue-600"
          : "bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500/10"
      } ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
