"use client";
import Link from "next/link";
import { ButtonProps } from "../types";
import { motion } from "framer-motion";

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  className = "",
  href,
  type,
  disabled,
}) => {
  const buttonMotion = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    transition: { duration: 0.2 },
  };

  return (
    <>
      {href ? (
        <Link href={href}>
          <motion.button
            {...buttonMotion}
            disabled={disabled}
            type={type}
            onClick={onClick}
            className={`px-7 py-3 rounded-3xl font-openSans transition-all btn-gradient text-white cursor-pointer ${className}`}
          >
            {text}
          </motion.button>
        </Link>
      ) : (
        <motion.button
          {...buttonMotion}
          disabled={disabled}
          type={type}
          onClick={onClick}
          className={`px-7 py-3 rounded-3xl font-openSans transition-all btn-gradient text-white cursor-pointer ${className}`}
        >
          {text}
        </motion.button>
      )}
    </>
  );
};

export default Button;
