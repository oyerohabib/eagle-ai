import { ButtonProps } from "../types";

const Button: React.FC<ButtonProps> = ({ text, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 rounded-full font-medium transition-all btn-gradient text-white ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
