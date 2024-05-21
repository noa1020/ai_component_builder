import React from 'react';

interface RMGImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

const RMGImage: React.FC<RMGImageProps> = ({ src, alt, width = 100, height = 100 }) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="rounded-lg"
    />
  );
};

export default RMGImage;
