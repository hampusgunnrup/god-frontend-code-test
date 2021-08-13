import React from 'react';
import { Button } from 'vcc-ui';

import chevronIcon from './chevron-icon.svg';

interface ChevronButtonProps {
  direction: "left" | "right",
  disabled: boolean,
  onClick: (event: React.UIEvent<HTMLElement>) => void,
};

function ChevronButton(props: ChevronButtonProps) {
  const { direction, disabled, onClick } = props;
  const iconStyle = direction === 'left' ? { transform: 'rotate(180deg)' } : {};

  return (
    <Button disabled={disabled} onClick={onClick} variant="text" style={{
      padding: '5px',
      width: '3.5rem',
      minWidth: '0',
      transition: 'all 1s ease',
    }}>
      <img src={chevronIcon} alt={`Chevron ${direction} button icon`} style={iconStyle} />
    </Button>
  );
}

export default ChevronButton;
