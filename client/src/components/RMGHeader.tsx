import React from 'react';

interface RMGHeaderProps {
  text: string;
  size?: 'small' | 'medium' | 'large';
  color?: string;
}

const RMGHeader: React.FC<RMGHeaderProps> = ({ text, size = 'medium', color = 'black' }) => {
  let fontSize = '';
  switch (size) {
    case 'small':
      fontSize = 'text-sm';
      break;
    case 'medium':
      fontSize = 'text-md';
      break;
    case 'large':
      fontSize = 'text-lg';
      break;
    default:
      fontSize = 'text-md';
  }

  return (
    <h1 className={`font-bold ${fontSize} ${color}`}>
      {text}
    </h1>
  );
};

export default RMGHeader;
