import Rating          from '@material-ui/lab/Rating';
import React           from 'react';
import {useStateValue} from "../Context/StateProvider";

import './product.scss';

const Product = ({id, styleClass, title, price, image, rating}) => {
    const [{basket}, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

    return (
        <div className={`product ` + styleClass}>
            <div className="product__info">
                <p className="product__title">{title}</p>
                <p className="product__price">
                    <strong>{price}</strong> <small>€</small>
                </p>
                <div className="product__rating">
                    {
                        rating ?
                        <Rating name="half-rating-read size-small" defaultValue={rating} precision={0.5} readOnly/> : ''
                    }

                </div>
            </div>
            <img src={image} alt=""/>
            <button onClick={addToBasket}>Ajouter au panier</button>
        </div>
    );
};

export default Product;
