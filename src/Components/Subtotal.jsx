import React            from 'react';
import CurrencyFormat   from "react-currency-format";
import {useHistory}     from "react-router-dom";
import {getBasketTotal} from "../Context/reducer";
import {useStateValue}  from "../Context/StateProvider";

import './subtotal.scss';

const Subtotal = () => {
    const history = useHistory();
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Sous-total ({basket.length} items): <strong>{value}</strong>
                        </p>
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
            <button onClick={e => basket.length >= 1 && history.push('/payment')}>Confirmer la commande</button>
        </div>
    );
};

export default Subtotal;
