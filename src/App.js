import {Elements}                               from "@stripe/react-stripe-js";
import {loadStripe}                             from '@stripe/stripe-js';
import React, {useEffect}                       from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

import Footer          from "./Components/Footer";
import Header          from "./Components/Header";
import SubHeader       from "./Components/SubHeader";
import {useStateValue} from "./Context/StateProvider";
import {auth}          from "./firebase";
import CheckoutPage    from "./Page/CheckoutPage";
import HomePage        from "./Page/HomePage";
import LoginPage       from "./Page/LoginPage";
import OrdersPage      from "./Page/OrdersPage";
import PageNotFound    from "./Page/PageNotFound";
import PaymentPage     from "./Page/PaymentPage";

const promise = loadStripe('pk_test_LRjOwcvlSbA6Im8zJZ4zHErj00UxY0jHvB');

function App() {
    const [{}, dispatch] = useStateValue();

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                // the user just logged in / the user was logged in
                dispatch({
                    type: "SET_USER",
                    user: authUser,
                });
            } else {
                // the user is logged out
                dispatch({
                    type: "SET_USER",
                    user: null,
                });
            }
        });
    }, []);

    return (
        <Router>
            <div className="App">
                <Header/>
                <SubHeader/>
                <div className="content">

                    <Switch>
                        <Route exact path="/" component={HomePage}/>
                        <Route exact path="/checkout" component={CheckoutPage}/>
                        <Route exact path="/login" component={LoginPage}/>
                        <Route exact path="/payment">
                            <Elements stripe={promise}>
                                <PaymentPage/>
                            </Elements>
                        </Route>
                        <Route exact path="/orders" component={OrdersPage}/>
                        <Route component={PageNotFound}/>
                    </Switch>
                </div>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
