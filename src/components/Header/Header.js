import React from 'react';

import './header.scss';

const Header = () => (
    <header className="menu">
        <nav>
            <a className="menu-link menu-link--active">Catégorie 1</a>
            <a className="menu-link">Catégorie 2</a>
        </nav>
    </header>
);

export default Header;