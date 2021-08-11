import { Car } from "../types/car";
import { Product } from "../types/product";

export default function carToProduct(car: Car): Product {
  return {
    id: car.id,
    name: car.modelName,
    type: car.bodyType,
    subType: car.modelType,
    imageUrl: car.imageUrl,
  };
}
