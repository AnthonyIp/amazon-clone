import React from 'react';
import './footer.scss';

const Footer = () => {
    return (
        <div className="footer">
            <a href="#header" className='footer__backToTop'>
                Retour en haut
            </a>
            <div className="footer__menuContainer">
                <div className="footer__menu">
                    <div className="footer__menuFirm">
                        <p className="footer__menuTitle">Pour mieux nous connaitre</p>
                        <p className="footer__menuSubTitle">A propos d'Amazon</p>
                        <p className="footer__menuSubTitle">Carrières</p>
                        <p className="footer__menuSubTitle">Durabilité</p>
                    </div>
                    <div className="footer__menuPartneship">
                        <p className="footer__menuTitle">Gagnez de l'argent</p>
                        <p className="footer__menuSubTitle">A propos d'Amazon</p>
                        <p className="footer__menuSubTitle">Carrières</p>
                        <p className="footer__menuSubTitle">Durabilité</p>
                        <p className="footer__menuSubTitle">A propos d'Amazon</p>
                        <p className="footer__menuSubTitle">Carrières</p>
                        <p className="footer__menuSubTitle">Durabilité</p>
                        <p className="footer__menuSubTitle">A propos d'Amazon</p>
                        <p className="footer__menuSubTitle">Carrières</p>
                        <p className="footer__menuSubTitle">Durabilité</p>
                    </div>
                    <div className="footer__menuPayment">
                        <p className="footer__menuTitle">Moyens de paiement Amazon</p>
                        <p className="footer__menuSubTitle">A propos d'Amazon</p>
                        <p className="footer__menuSubTitle">Carrières</p>
                        <p className="footer__menuSubTitle">Durabilité</p>
                        <p className="footer__menuSubTitle">A propos d'Amazon</p>
                        <p className="footer__menuSubTitle">Carrières</p>
                        <p className="footer__menuSubTitle">Durabilité</p>
                    </div>
                    <div className="footer__menuHelp">
                        <p className="footer__menuTitle">Besoin d'aide ?</p>
                        <p className="footer__menuSubTitle">A propos d'Amazon</p>
                        <p className="footer__menuSubTitle">Carrières</p>
                        <p className="footer__menuSubTitle">Durabilité</p>
                        <p className="footer__menuSubTitle">A propos d'Amazon</p>
                        <p className="footer__menuSubTitle">Carrières</p>
                        <p className="footer__menuSubTitle">Durabilité</p>
                        <p className="footer__menuSubTitle">A propos d'Amazon</p>
                        <p className="footer__menuSubTitle">Carrières</p>
                        <p className="footer__menuSubTitle">Durabilité</p>
                    </div>
                </div>
                <hr/>
                <div className="footer__menuBottom">
                    <img className="footer__menuBottom__img" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>
                   <div className="footer__menuBottomContainerSelect">
                       <select className="footer__menuBottomLanguage" name="footer__menuBottomLanguage" id="header__searchSelect">
                           <option value="">Francais</option>
                           <option value="">English</option>
                       </select>
                       <select className="footer__menuBottomCurrency" name="footer__menuBottomCurrency" id="header__searchSelect">
                           <option value="">EUR - Euro</option>
                           <option value="">USD - U.S. Dollar</option>
                       </select>
                       <select className="footer__menuBottomCountry" name="footer__menuBottomCountry" id="header__searchSelect">
                           <option value="">France</option>
                           <option value="">USA</option>
                       </select>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
