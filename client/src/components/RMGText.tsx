import React from 'react';

interface RMGTextProps {
  text: string;
  color?: string;
  size?: 'small' | 'medium' | 'large';
}

const RMGText: React.FC<RMGTextProps> = ({ text, color = 'black', size = 'medium' }) => {
  let textSize = '';
  switch (size) {
    case 'small':
      textSize = 'text-sm';
      break;
    case 'medium':
      textSize = 'text-md';
      break;
    case 'large':
      textSize = 'text-lg';
      break;
    default:
      textSize = 'text-md';
  }

  return (
    <p className={`font-normal ${textSize} ${color}`}>
      {text}
    </p>
  );
};

export default RMGText;
