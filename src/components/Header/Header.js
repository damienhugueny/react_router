import React from 'react';

import PropTypes from 'prop-types';
// le composant Link permet d'avoir une balise "a" avec l'URL indiquée pour la
// prop "to"*
// composant NavLink : comme Link mais avec en plus un style particulier pour
// l'élément qui correspond à l'URL de la barre d'adresse. Ajoute la classs CSS
// "active" sur le lien, on peut changer cette classe avec la prop "activeClassName"
// la comparaisont est "qui commence par", donc si URL "/React" dans la barre
// d'adresse => alors les liens / et /react auront la classe CSS => prop "exact"
import { /*Link*/ NavLink } from 'react-router-dom';

import './header.scss';

const Header = ({ categories, currentCategory }) => (
    <header className="menu">
        <nav>

        {categories.map((category) => {

            // const className = (category.label === currentCategory ? 'menu-link menu-link--active' : 'menu-link');
            // <a key={category.label} className={className}>{category.label}</a>
            return (
                <NavLink 
                    to={category.route} 
                    className="menu-link" 
                    key={category.label}
                    activeClassName="menu-link--active"
                    exact
                >
                    {category.label}
                </NavLink>
            );
        })}
        </nav>
    </header>
);

Header.prototypes = {
    categories: PropTypes.arrayOf(
        PropTypes.shape({
            route: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
    currentCategory: PropTypes.string.isRequired,
};

export default Header;