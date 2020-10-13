import Rating          from "@material-ui/lab/Rating";
import React           from 'react';
import {useStateValue} from "../Context/StateProvider";
import './checkoutproduct.scss';

const CheckoutProduct = ({id, image, title, price, rating, hideButton}) => {
    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id  : id,
        })
    }
    return (
        <div className={'checkout-product'}>
            <img src={image} alt={title} className="checkout-product__image"/>
            <div className="checkout-product__info">
                <p className="checkout-product__title">{title}</p>
                <p className="checkout-product__price">
                    <strong>{price}</strong> <small>€</small>
                </p>
                <div className="checkout-product__rating">
                    {
                        rating ?
                        <Rating name="half-rating-read size-small" defaultValue={rating} precision={0.5} readOnly/> : ''
                    }
                </div>
                {
                    !hideButton && (
                        <button onClick={removeFromBasket}>Retirer du panier</button>
                    )
                }
            </div>
        </div>
    );
};

export default CheckoutProduct;
