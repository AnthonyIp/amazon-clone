import React           from 'react';
import CheckoutProduct from "../Components/CheckoutProduct";
import Subtotal        from "../Components/Subtotal";
import {useStateValue} from "../Context/StateProvider";
import './checkout.scss';

const CheckoutPage = () => {
    const [{basket}, dispatch] = useStateValue();

    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt="" className="checkout__ad"/>
                <div>
                    <h2 className='checkout__title'>Votre panier</h2>
                    {
                        basket.map((item) => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))
                    }
                </div>
            </div>


            <div className='checkout__right'>
                <Subtotal/>
            </div>
        </div>
    );
};

export default CheckoutPage;
