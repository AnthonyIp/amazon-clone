import React   from 'react';
import './home.scss';
import Product from "./Product";

const HomePage = () => {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" alt=""
                     src="https://images-eu.ssl-images-amazon.com/images/G/08/digital/video/gateway/placement/launch/BrutusvsCesar/BRUCE_2020_GWBleedingHero_COVIDUPDATE_ENG_XSite_1500x600_PV_fr-FR._CB402694762_.jpg"
                />

                <div className="home__row">
                    <Product styleClass="home__product1"
                             title={"Rainforest Winter Jacket Blouson Homme"} price={124.99} rating={4.5}
                             image={"https://m.media-amazon.com/images/I/71FjD-cWdOL._AC_UL320_.jpg"}/>
                    <Product styleClass="home__product2" title={"Superstar, Basket Homme"} price={74.96} rating={4.5}
                             image={"https://m.media-amazon.com/images/I/81-+iIHiLUL._AC_UL320_.jpg"}/>
                </div>
                <div className="home__row">
                    <Product styleClass="home__product3" title={"Top Spiderman, Tongs Mixte"} price={23.05} rating={4.5}
                             image={"https://m.media-amazon.com/images/I/91w1NJB+IcL._AC_UL320_.jpg"}/>
                    <Product styleClass="home__product4" title={"E-tokeep Boutons de Manchette Homme"} price={32.54}
                             image={"https://m.media-amazon.com/images/I/612dD+UXLmL._AC_UL320_.jpg"}/>
                    <Product styleClass="home__product5" title={"Short Homme"} price={86.00} rating={3}
                             image={"https://m.media-amazon.com/images/I/81q4PLOrhwL._AC_UL320_.jpg"}/>
                </div>
                <div className="home__row">
                    <Product styleClass="home__product6" title={"Stan Smith M20324, Chaussures de Gymnastique Homme"} price={52.74} rating={4.5}
                             image={"https://m.media-amazon.com/images/I/61rigQzeh7L._AC_UL320_.jpg"}/>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
