import React, { useEffect, useState } from 'react';
// @ts-ignore: No declaration file error
import { View } from 'vcc-ui';

import { Car } from './types/car';
import { getCars } from './api/car';

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
      { JSON.stringify(cars) }
    </View>
  );
}

export default App;
