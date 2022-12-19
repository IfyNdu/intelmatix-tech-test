export type Stock = {
  currentStock: number;
  icon: string;
  id: number;
  maximumStock: number;
  name: string;
};

export type StockLevel = {
  currentStock: number;
  date: string;
  demandStock: number;
};
