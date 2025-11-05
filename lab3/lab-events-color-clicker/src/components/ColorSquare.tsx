import React from "react";

type Props = {
  color: string; // bv. "#ff0000" of "tomato"
  size: number;  // in px
  onClick?: (color: string) => void;
};

const ColorSquare: React.FC<Props> = ({ color, size, onClick }) => {
  const handleClick: React.MouseEventHandler<HTMLDivElement> = () => {
    onClick?.(color);
  };

  return (
    <div
      onClick={handleClick}
      title={color}
      style={{
        width: size,
        height: size,
        background: color,
        cursor: "pointer",
        // borderRadius: 4,
      }}
      aria-label={`color-${color}`}
    />
  );
};

export default ColorSquare;
