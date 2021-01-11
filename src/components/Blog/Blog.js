import React from 'react';

import { Route, Router } from 'react-router-dom';
// composant Route : faire un rendu conditionnel en fonction de l'URL courante

import './blog.scss';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Posts from '../Posts/Posts'

import categoriesData from '../../data/categories';
import postsData from '../../data/posts';

import { getPostsByCategory } from '../../utils/selectors';


/* Pour avoir automatiquement une Route pa catégorie
- une fonction pour récupérer les articles d'une catégorie
- Une boucle sur les catégories
*/


class Blog extends React.Component {

    render() {

        //const postsReact = getPostsByCategory(postsData, 'React')

        //console.log(getPostsByCategory(postsData, 'Accueil'));

        return (
            <div className="blog">
                <Header categories={categoriesData} />
                {categoriesData.map((category) => (

                    <Route exact path={category.route} key={category.label}>
                        <Posts posts={getPostsByCategory(postsData, category.label)} />
                    </Route>

                ))}

                <Footer />
            </div>
        );
    }

};

export default Blog;