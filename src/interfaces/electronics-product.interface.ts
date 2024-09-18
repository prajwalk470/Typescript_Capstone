import { IProduct } from './product.interface';

export interface ElectronicsProduct extends IProduct {
    warrantyPeriod: number;
}
