import React from "react";

interface InputProps {
  type: string;
  name: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ type, name, placeholder }) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full p-5 rounded-3xl text-white placeholder-placeholder-text bg-[#344255] focus:outline-none transition duration-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
      />
    </div>
  );
};

export default Input;
