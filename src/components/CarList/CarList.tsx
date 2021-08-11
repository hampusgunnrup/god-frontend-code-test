import React from 'react';
import carToProduct from '../../transformers/carToProduct';
import { Car } from '../../types/car';
import ProductList from '../ProductList/ProductList';

interface CarListProps {
  cars: Car[],
}

function CarList(props: CarListProps) {
  const products = props.cars.map(carToProduct);
  return <ProductList products={products}></ProductList>;
}

export default CarList;
