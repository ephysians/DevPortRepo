import React, { useState } from 'react';

const DownloadResumeButton = ({
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
  const DownloadResumeButtonStyle = {
    backgroundColor: isHovered ? '#02172d' :'#0c5fb5' ,
    cursor: disabled ? 'not-allowed' : 'pointer',
    padding: '5px 40px',
    border: 'none',
    borderRadius: '5px',
    height: '40px',
    color: '#fff',
    outline: 'none',
    fontSize: '14px',
    opacity: disabled ? '0.6' : '1',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 1)',
  };

  const resumeLink = 'https://drive.google.com/file/d/1IGpC_bbauC1_2hVhs0DUs0pAtzSzrTpR/view'; // Ensure correct link without "?usp=sharing"

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeLink;
    link.download = 'Chuks_resume.pdf'; // Adjust filename as needed
    link.click();
  };

  return (
    <button
      onClick={handleDownload}
      style={{ ...DownloadResumeButtonStyle, cursor: disabled ? 'not-allowed' : 'pointer' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...restProps}
    >
      {text || 'Download PDF'}
    </button>
  );
};

DownloadResumeButton.defaultProps = {
  color: '#0c5fb5',
  text: 'Click',
  width: '300px',
  disabled: false,
};

export default DownloadResumeButton;
