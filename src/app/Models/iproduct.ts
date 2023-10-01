export interface Iproduct {
  id: number;
  name: string;
  quantity: number;
  price: number;
  categoryID: number;
  Material: string;
  prdImgURL?: string;
  offer?: Offers;
  count?: number;
  total?: number;
  details?: string;
}
export enum Offers {
  zeroPercent = 'No Discount',
  tenPercent = '10% Discount',
  fifteenPercent = '15% Discount',
}
