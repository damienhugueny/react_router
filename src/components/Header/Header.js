import React from 'react';

import PropTypes from 'prop-types';

import './header.scss';

const Header = ({ categories, currentCategory }) => (
    <header className="menu">
        <nav>

        {categories.map((category) => {

            const className = (category.label === currentCategory ? 'menu-link menu-link--active' : 'menu-link');

            return (
                <a key={category.label} className={className}>{category.label}</a>
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