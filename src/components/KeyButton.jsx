import React, { useState } from 'react';

const KeyButton = ({ label, onClick }) => {
  const [isPressed, setIsPressed] = useState(false);

  // Gestion des événements pour desktop
  const handleMouseDown = () => setIsPressed(true);
  const handleMouseUp = () => {
    setIsPressed(false);
    if (onClick) onClick(); // Appel de la fonction onClick passée en prop
  };
  const handleMouseLeave = () => setIsPressed(false);

  // Gestion des événements pour mobile (touch)
  const handleTouchStart = () => setIsPressed(true);
  const handleTouchEnd = () => {
    setIsPressed(false);
    if (onClick) onClick(); // Appel de la fonction onClick passée en prop
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
      <span className="absolute -bottom-2 right-5 z-10 flex h-full items-center justify-center text-2xl font-semibold text-white">
        {label}
      </span>
    </div>
  );
};

export default KeyButton;
