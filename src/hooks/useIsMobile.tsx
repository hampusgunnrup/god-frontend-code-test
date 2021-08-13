import { useState, useEffect } from 'react';
import * as device from '../utils/device';

export default function useIsMobile() {
  const [ isMobile, setIsMobile ] = useState(true);
  const handleResize = () => setIsMobile(device.isMobile());;
  useEffect(() => {
    setIsMobile(device.isMobile());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
}
