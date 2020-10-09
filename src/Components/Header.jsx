import React              from 'react';
import './header.scss';
import SearchIcon         from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasketOutlined';
import {Link}             from "react-router-dom";

const Header = () => {
    return (
        <div className="header" id='header'>
            <div className="header__logoContainer">
                <img className='header__logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>
            </div>
            <div className="header__search">
                <select className="header__searchSelect" name="header__searchSelect" id="header__searchSelect">
                    <option value="" deactivated="true">Toutes nos catégories</option>
                    <option value="">Alexa Skills</option>
                    <option value="">Amazon Warehouse</option>
                    <option value="">Animalerie</option>
                    <option value="">Appareil Amazon</option>
                    <option value="">Alexa Skills</option>
                </select>
                <input type="text" name="search__input" id="search__input" className="header__searchInput"/>
                <SearchIcon className="header__searchIcon"/>
            </div>

            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineOne">Bonjour, identifiez-vous</span>
                    <span className="header__optionLinTwo">Compte et listes</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Retours</span>
                    <span className="header__optionLinTwo">et Commandes</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Testez</span>
                    <span className="header__optionLinTwo">Prime</span>
                </div>
                <Link to={'/checkout'} className="header__optionBasket">
                    <ShoppingBasketIcon/>
                    <span className="header__optionLineTwo header__basketCount">0</span>
                    <span className="header__optionLineTwo"> Panier</span>
                </Link>

            </div>
        </div>
    );
};

export default Header;
