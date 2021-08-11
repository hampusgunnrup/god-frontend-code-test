import React, { useEffect, useState } from 'react';
import { View } from 'vcc-ui';

import { Car } from './types/car';
import { getCars } from './api/car';
import CarList from './components/CarList/CarList';

function App() {
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
    </View>
  );
}

export default App;
