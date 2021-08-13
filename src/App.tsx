import React, { useEffect, useState } from 'react';
import { View, Block, useTheme } from 'vcc-ui';

import { Car } from './types/car';
import { getCars } from './api/car';
import CarList from './components/CarList/CarList';
import { deviceTestElementId } from './utils/device';

function App() {
  const theme = useTheme();
  const [ cars, setCars ] = useState<Car[]>([]);

  useEffect(() => {
    (async () => {
      const apiResponse: Car[] = await getCars();
      setCars(apiResponse);
    })();
  }, []);

  return (
    <View>
      <CarList cars={cars}></CarList>
      <Block
        id={deviceTestElementId}
        extend={{
          display: 'none',
          // z-index 1 means mobile.
          zIndex: 1,
          [theme.breakpoints.fromXL]: {
            // z-index 2 means desktop.
            zIndex: 2,
          }
        }}
      />
    </View>
  );
}

export default App;
