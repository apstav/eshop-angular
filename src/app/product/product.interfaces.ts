export interface Product {
  product: string;
  description: string;
  quantity: string;
  cost: string;
}
export interface ProductAPIList {
  status: boolean;
  data: Product[];
}
