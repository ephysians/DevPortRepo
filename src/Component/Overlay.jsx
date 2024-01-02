// Overlay.js
import React from 'react';

const Overlay = () => {
  return (
    <div
      className="absolute inset-0 bg-black opacity-80"
      style={{ zIndex: 1, pointerEvents: 'none' }} // Add pointer-events: none;
    />
  );
};

export default Overlay;
