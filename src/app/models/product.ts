export interface Product {
  productId: number;
  productSku: string;
  productName: string;
  productPrice: number;
  productShortName: string;
  productDescription: string;
  createdDate: string;        // ISO date string
  deliveryTimeSpan: string;
  categoryId: number;
  productImageUrl: string;
  userId: number;
}
