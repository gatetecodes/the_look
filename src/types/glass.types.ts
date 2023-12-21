export interface CreateGlassParams {
  glassType: string;
  glassCategory: string;
  cylinder: string;
  sphere: string;
  quantity: string;
  purchaseCostPerGlass: string;
}

export interface IGlass {
  id: number;
  type: string;
  category: string;
  cylinder: number;
  sphere: number;
  quantity: number;
  purchaseCost: number;
  purchaseDate: Date;
}