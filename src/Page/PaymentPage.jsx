import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js";
import React, {useEffect, useState}          from 'react';
import CurrencyFormat                        from "react-currency-format";
import {Link, useHistory}                    from "react-router-dom";
import CheckoutProduct                       from "../Components/CheckoutProduct";
import {getBasketTotal}                      from "../Context/reducer";
import {useStateValue}                       from "../Context/StateProvider";
import {db}                                  from "../firebase";
import axios                                 from "../utils/axios";
import './payment.scss';

const PaymentPage = () => {
    const [{basket, user}, dispatch] = useStateValue();
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    const stripe = useStripe();
    const elements = useElements();
    const history = useHistory();

    const getClientSecret = async () => {
        const response = await axios({
            method: 'post',
            // Stripe expects the total in a currencies subunits
            url   : `/payments/create?total=${getBasketTotal(basket) * 100}`
        });
        setClientSecret(response.data.clientSecret)
    };

    useEffect(() => {
        // generate the special stripe secret which allows us to charge a customer
        getClientSecret();
    }, [basket])

    console.log('THE SECRET IS >>>', clientSecret)
    console.log('👱', user)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {
            //    paymentIntent == payment confirmation

            db.collection('users')
              .doc(user?.uid)
              .collection('orders')
              .doc(paymentIntent.id)
              .set({
                  basket : basket,
                  amount : paymentIntent.amount,
                  created: paymentIntent.created
              });

            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: 'EMPTY_BASKET'
            });

            history.replace('/orders');
        })
    }


    const handleChange = (e) => {
        // Listen for changes in the CardElement
        // and display any errors as the customer types their card details
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    }
    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Panier (
                    <Link to="/checkout">{basket?.length} produit{basket.length > 1 ? 's' : ''}</Link>
                    )
                </h1>
                <div className="payment__section payment__delivery">
                    <div className='payment__title'>
                        <h3>Adresse de livraison</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>
                <div className="payment__section payment__reviewItems">
                    <div className="payment__title">
                        <h3>Récapitulatifs des produits et de la livraison</h3>
                    </div>
                    <div className='payment__items'>
                        {
                            basket.map(item => (
                                <CheckoutProduct key={basket.indexOf(item)}
                                                 id={item.id}
                                                 title={item.title}
                                                 image={item.image}
                                                 price={item.price}
                                                 rating={item.rating}
                                />
                            ))}
                    </div>
                </div>
                <div className="payment__section payment__methods">
                    <div className="payment__title">
                        <h3>Méthodes de paiements</h3>
                    </div>
                    <div className="payment__details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>
                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <>
                                            <h4>Sous-total ({basket.length} items): <strong>{value}</strong></h4>
                                            <small className="subtotal__gift">
                                                <input type="checkbox"/> Cette commande est un cadeau
                                            </small>
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"€"}
                                />
                            </div>
                            <button disabled={processing || disabled || succeeded}>
                                <span>{processing ? <p>Paiement en cours</p> : "Acheter Maintenant"}</span>
                            </button>
                            {/* Errors */}
                            {error && <div>{error}</div>}
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PaymentPage;
