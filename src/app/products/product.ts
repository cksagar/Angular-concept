
export interface Product {
    productId: number;
    productName: string;
    productCode: string;
    releaseDate: string;
    description: string;
    price: number;
    starRating: number;
    imageUrl: string;
}

export interface ProductResolved {
  product: Product;
  error?: any;
}