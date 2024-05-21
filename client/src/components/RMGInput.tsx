import React from 'react';

interface RMGInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: 'text' | 'number' | 'email' | 'password';
}

const RMGInput: React.FC<RMGInputProps> = ({ value, onChange, placeholder = '', type = 'text' }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
    />
  );
};

export default RMGInput;
