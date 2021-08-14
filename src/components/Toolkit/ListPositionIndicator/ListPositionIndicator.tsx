import React, { ReactNode } from 'react';
import { useTheme, Click, Flex } from 'vcc-ui';

interface ListPositionIndicatorProps {
  totalPositions: number,
  currentPosition: number,
}

function ListPositionIndicator(props: ListPositionIndicatorProps) {
  const { totalPositions, currentPosition } = props;
  const dots: ReactNode[] = [];
  const theme = useTheme();

  for (let i = 0; i < totalPositions; i += 1) {
    const isCurrent = currentPosition === i + 1;
    const dot = (
      <Click
        key={`dot-${i}`}
        extend={{
          height: '0.7rem',
          width: '0.7rem',
          backgroundColor: isCurrent ? theme.color.foreground.primary : theme.color.ornament.divider,
          borderRadius: '50%',
          margin: '0 0.3rem',
          cursor: isCurrent ? 'unset' : 'pointer',
          transition: 'all 0.4s ease',
        }}
        disabled={isCurrent}
      />
    );
    dots.push(dot);
  }
  return <Flex extend={{ flexDirection: 'row', justifyContent: 'center' }}>{dots}</Flex>;
}

export default ListPositionIndicator;
