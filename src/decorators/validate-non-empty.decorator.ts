export function ValidateNonEmpty(target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        const product = args[0];
        if (product && typeof product === 'object') {
            if (propertyKey === 'create') {
                if (!product.name ) {
                    throw new Error("Product name cannot be empty");
                }
                else if(product.price <= 0){
                    throw new Error("Product price cannot be less than 0");
                }
            }
            if (propertyKey === 'update') {
                if (product && typeof product === 'object') {
                    if (product.name !== undefined && product.name === '') {
                        throw new Error("Product name cannot be empty");
                    }
                    else if(product.price <= 0){
                        throw new Error("Product price cannot be less than 0");
                    }
                }
            }
        }
        return originalMethod.apply(this, args);
    };
    return descriptor;
}

