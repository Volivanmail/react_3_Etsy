export interface IListing {
    listing_id: number;
    url?: string;
    MainImage?: {url_570xN?: string};
    title: string;
    currency_code: string;
    price: string;
    quantity: number;
}

export interface IItems extends Array<IListing> {
    activated: true;
  }
