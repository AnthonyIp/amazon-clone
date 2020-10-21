import React  from 'react';
import {Link} from "react-router-dom";

import './pagenotfound.scss';

const PageNotFound = () => {
    return (
        <div className="pageNotFound">
            <div className="pageNotFound__container">
                <img className="pageNotFound__image" src="https://www.salehriaz.com/404Page/img/404.svg" alt=""/>
                <h1>La page que vous recherchez n'existe pas !</h1>
                <p>Merci de vous rediriger vers <Link to="/">l'acceuil</Link></p>

            </div>
        </div>
    );
};

export default PageNotFound;
