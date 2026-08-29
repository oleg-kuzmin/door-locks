export type ObjectProduct = {
  id: string;
  title: string;
  image: string;
  newPrice: string | number;
  oldPrice: string | number;
  inStock: boolean;
  sale: boolean;
  present: boolean;
  rating?: number;
  reviewsCount?: number;
};
