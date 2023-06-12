import { IItems, IListing} from "../models";
interface ListingProps {
  item: IListing
  items: IItems
}

export default function Listing({ item, items }: ListingProps) {

  return (
    <div className="item-list">
      {items.map(
        (item) =>
          item.state === 'active' && (
            <div key={item.listing_id} className="item">
              <div className="item-image">
                <a href={item.url}>
                  <img src={item.MainImage.url_570xN} alt={"img " + `${item.title.slice(0, 30)}`} />
                </a>
              </div>
              <div className="item-details">
                <p className="item-title">{item.title.length > 50 ? `${item.title.slice(0, 50)}...` : item.title}</p>
                <p className="item-price">
                  {(item.currency_code === 'USD' && '$') || (item.currency_code === 'EUR' && '€ ')}{item.price}
                  {item.currency_code !== 'USD' && item.currency_code !== 'EUR' && ' ' + item.currency_code}
                </p>
                <p className={
                  'item-quantity level-' + 
                  ((item.quantity! <= 10 && 'low') ||
                  (item.quantity! <= 20 && 'medium') ||
                  (item.quantity! > 20 && 'high'))
                  }>
                  {item.quantity} left
                </p>
              </div>
            </div>
          ),
      )}
    </div>
  );
}
