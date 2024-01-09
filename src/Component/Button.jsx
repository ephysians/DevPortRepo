import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Button = ({
  onClick,
  text,
  color,
  disabled,
  width,
  height,
  href,
  type = 'button',
  ...restProps
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    backgroundColor: isHovered ? '#0c5fb5' : '#02172d',
    cursor: disabled ? 'not-allowed' : 'pointer',
    padding: '5px 40px',
    border: 'none',
    borderRadius: '5px',
    height:'40px',
    color: '#fff',
    outline: 'none',
    fontSize: '14px',
    opacity: disabled ? '0.6' : '1',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 1)',
    // other styles...
  };

  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ ...buttonStyle, cursor: disabled ? 'not-allowed' : 'pointer' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text}
    </a>
  ) : (
    <button
      type={type}
      onClick={onClick}
      style={{ ...buttonStyle, cursor: disabled ? 'not-allowed' : 'pointer' }}
      disabled={disabled}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...restProps}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  color: '#02172d',
  text: 'Click',
  width:'300px',
  disabled: false,
};

export default Button;





