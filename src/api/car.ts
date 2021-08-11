import { Car } from '../types/car';

export async function getCars(): Promise<Car[]> {
  return (await fetch('/api/cars.json')).json();
}
