import React, { useState } from 'react';

const KeyButton = ({ label, onClick }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handleMouseDown = () => setIsPressed(true);
  const handleMouseUp = () => {
    setIsPressed(false);
    if (onClick) onClick();
  };
  const handleMouseLeave = () => setIsPressed(false);

  const handleTouchStart = () => setIsPressed(true);
  const handleTouchEnd = () => {
    setIsPressed(false);
    if (onClick) onClick();
  };
  const handleTouchCancel = () => setIsPressed(false);

  return (
    <div
      className={isPressed ? 'keyboard-pressed' : 'keyboard-default'}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchCancel}
    >
      <span className="absolute bottom-0 left-0 right-0 z-10 flex h-full items-center justify-center text-4xl font-semibold text-white">
        {label}
      </span>
    </div>
  );
};

export default KeyButton;
