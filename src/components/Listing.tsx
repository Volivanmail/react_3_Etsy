import { IListing } from "../models";
import classnames from 'classnames';

interface ListingProps {
  items: IListing
}

export default function Listing({ items }: ListingProps) {

  const title = items.title.length > 50 ? `${items.title.slice(0, 50)}...` : items.title;
  const currency = {
    USD: '$',
    EUR: '€',
  };

  let classQuantity = 'level-high';

  if (items.quantity <= 10) {
    classQuantity = 'level-low';
  } else if (items.quantity <= 20) {
    classQuantity = 'level-medium';
  }

  const className = classnames('item-quantity', classQuantity);

  return (
    <>
      <div className="item-image">
        <a href={items.url}>
          <img src={items.MainImage.url_570xN} alt={items}/>
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{title}</p>
        <p className="item-price">{currency[items.currency_code] ? currency[items.currency_code] : items.currency_code} {items.price}</p>
        <p className={className}>{items.quantity} left</p>
      </div>
    </>
  );
}
