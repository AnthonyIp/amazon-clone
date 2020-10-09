import React                                    from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';

import Header       from "./Components/Header";
import HomePage     from "./Components/HomePage";
import SubHeader    from "./Components/SubHeader";
import CheckoutPage from "./Components/CheckoutPage";
import Footer       from "./Components/Footer";

function App() {
    return (
        <Router>
            <div className="App">
                <Header/>
                <SubHeader/>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/checkout" component={CheckoutPage}/>
                </Switch>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
