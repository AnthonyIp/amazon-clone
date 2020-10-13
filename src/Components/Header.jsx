import SearchIcon         from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasketOutlined';
import React              from 'react';
import {Link}             from "react-router-dom";
import {useStateValue}    from "../Context/StateProvider";
import {auth}             from "../firebase";

import './header.scss';

const Header = () => {
    const [{basket, user}, dispatch] = useStateValue();
    const handleSignOut = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className="header" id='header'>
            <Link to={`/`} className="header__logoContainer">
                <img className='header__logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>
            </Link>
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
                <Link to={!user && '/login'}>
                    <div className="header__option" onClick={handleSignOut}>
                        <span className="header__optionLineOne">Bonjour, {user?.email || "identifiez-vous"}</span>
                        <span className="header__optionLinTwo">Compte et listes</span>
                    </div>
                </Link>

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
                    <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                </Link>

            </div>
        </div>
    );
};

export default Header;
