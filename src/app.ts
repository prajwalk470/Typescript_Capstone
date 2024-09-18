import { ProductService } from './services/product.service';
import { ElectronicsProduct } from './interfaces/electronics-product.interface';
import { FoodProduct } from './interfaces/food-product.interface';

const electronicsService = new ProductService<ElectronicsProduct>();
const foodService = new ProductService<FoodProduct>();

electronicsService.create({
    id: 1,
    name: "Redmi",
    price: 10500,
    warrantyPeriod: 36
});

foodService.create({
    id: 2,
    name: "Apple",
    price: 105,
    expiryDate: "2023-12-01"
});

electronicsService.create({
    id: 2,
    name: "xyz",
    price: 500,
    warrantyPeriod: 12
});

// this throws an error because name is empty
foodService.create({
    id: 5,
    name: "cereals",
    price: 56,
    expiryDate: "2022-18-10"
})

// this throws an error because price is less than 0
foodService.create({
    id: 3,
    name: "Grapes",
    price: 87,
    expiryDate: "2024-12-01"
});
// elec product
const electronicsProduct = electronicsService.read(1);
console.log(electronicsProduct);
// food prodcut
const foodProduct = foodService.read(2);
console.log(foodProduct);

electronicsService.update(1, { price: 899 });
// read after update 
const ep = electronicsService.read(1);
console.log(ep);

foodService.delete(2);

console.log(electronicsService.getAll());
console.log(foodService.getAll());
