import React    from 'react';
import './product.scss';
import Rating from '@material-ui/lab/Rating';


const Product = ({styleClass, title, price, image, rating}) => {
    return (
        <div className={`product ` + styleClass}>
            <div className="product__info">
                <p className="product__title">{title}</p>
                <p className="product__price">
                    <strong>{price}</strong> <small>€</small>
                </p>
                <div className="product__rating">
                    {
                        rating ?  <Rating name="half-rating-read size-small" defaultValue={rating} precision={0.5} readOnly /> : ''
                    }

                </div>
            </div>
            <img src={image} alt=""/>
            <button>Ajouter au panier</button>
        </div>
    );
};

export default Product;
