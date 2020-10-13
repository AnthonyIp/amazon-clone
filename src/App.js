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

function App() {
    const [{}, dispatch] = useStateValue();

    useEffect(() => {
        // will only run once when the app component loads...
        auth.onAuthStateChanged((authUser) => {
            // console.log("THE USER IS >>> ", authUser);
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
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/checkout" component={CheckoutPage}/>
                    <Route exact path="/login" component={LoginPage}/>
                </Switch>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
