import React from 'react';
import './subheader.scss';
import LocationOnIcon from '@material-ui/icons/LocationOnOutlined';

const SubHeader = () => {
    return (
        <div className="subheader">
            <div className="subheader__location">
                <LocationOnIcon />
                <div className="subheader__locationContainer">
                    <span className="subheader__locationLineOne">Bonjour</span>
                    <span className="subheader__locationLineTwo">Entrez votre adresse</span>
                </div>
            </div>
            <div className="subheader__nav">
                <div className="subheader__navOption">Meilleures Ventes</div>
                <div className="subheader__navOption">AmazonBasics</div>
                <div className="subheader__navOption">Ventes Flash</div>
                <div className="subheader__navOption">Dernières Nouveautés</div>
                <div className="subheader__navOption">High Tech</div>
                <div className="subheader__navOption">Livres</div>
                <div className="subheader__navOption">Services Client</div>
                <div className="subheader__navOption">Cuisine et Maison</div>
                <div className="subheader__navOption">Les Plus Offerts</div>
                <div className="subheader__navOption">Informatique</div>
                <div className="subheader__navOption">Cheques-cadeaux</div>
                <div className="subheader__navOption">Vendre</div>
            </div>
            <div className="subheader__primeAdvertisement">
                Prime Day, c'est du 13 au 14 octobre
            </div>
        </div>
    );
};

export default SubHeader;
