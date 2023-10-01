export class Store {
  // storeName: string;
  // branches: string[];
  // logo: string;
  constructor(
    public name: string,
    public branches: string[],
    public logo: string,
    public discount: Discounts
  ) {}
}

export enum Discounts {
  zeroPercent = 'No Discount',
  tenPercent = '10% Discount',
  fifteenPercent = '15% Discount',
}
