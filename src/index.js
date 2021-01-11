// == Import : npm
import React from 'react';
import { render } from 'react-dom';

// pour pouvoir utiliser les composants de react-router-dom, je dois englober
// toute mon application dans un composant Router;
import { BrowserRouter as Router } from 'react-router-dom';

// == imports locaux
import './styles/index.scss'

// == Import : locale
// Composants
import Blog from './components/Blog/Blog';

// ==  Render
// 1. Element React racine (celui qui contient l'ensemble de l'app)
// => crée une structure d'objets imbriqués (DOM virtuel)
const rootReactElement = (
    <Router>
        <Blog />
    </Router>
);

// 2. La cible du DOM (là ou la structure doit prendre vie dans le DOM)
const target = document.getElementById('root');
// 3. Déclenchement du rendu de React (virtuel) => DOM (page web)
render(rootReactElement, target);
