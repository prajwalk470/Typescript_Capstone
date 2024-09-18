import { ValidateNonEmpty } from '../decorators/validate-non-empty.decorator';
import { IProduct } from '../interfaces/product.interface';

export class ProductService<T extends IProduct> {
  private products: T[] = [];

  @ValidateNonEmpty
  create(product: T): any {
      this.products.push(product);
      console.log(`Product with ID ${product.id} created successfully.`);
    }

  read(id: number): T | undefined {
    return this.products.find(p => p.id === id);
  }

  @ValidateNonEmpty
  update(id: number, updatedProduct: Partial<T>): void {
    const index = this.products.findIndex(p => p.id === id);

    if (index === -1) {
      throw new Error(`Product with ID ${id} not found.`);
    }

    const currentProduct = this.products[index];
    this.products[index] = { ...currentProduct, ...updatedProduct } as T;

    console.log(`Product with ID ${id} updated successfully.`);
  }

  delete(id: number): void {
    this.products = this.products.filter(p => p.id !== id);
    console.log(`Product with ID ${id} deleted successfully.`);
  }

  getAll(): T[] {
    return this.products;
  }
}
