import { IProduct } from './product.interface';

export interface FoodProduct extends IProduct {
    expiryDate: string;
}
