export interface IListing {
    listing_id: number;
    url?: string;
    MainImage?: {url_570xN?: string};
    title: string;
    current_code: string;
    price: string;
    quantity: number;
}