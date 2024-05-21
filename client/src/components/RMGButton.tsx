import React from 'react';

interface RMGButtonProps {
  title: string;
  onClick?: () => void;
}

const RMGButton: React.FC<RMGButtonProps> = ({ title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-black text-white py-2 px-4 rounded hover:bg-opacity-90 focus:outline-none"
    >
      {title}
    </button>
  );
};

export default RMGButton;
