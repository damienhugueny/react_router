import React, { useState } from 'react';


// composant Switch : seulement le première route qui correspond est rendu =>
// utile pour page d'erreur 404
import { Link, Route, Switch, Redirect } from 'react-router-dom';
// react-router-dom utilise l'API History du navigateur
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

/* Objectif : charger les articles depuis une API
 X STOCKER LES ARTICLES DANS LE STATE (tableau vide initialement)
 X ajouter une bouton pour déclencher le chargement des articles
 - créer un status loading
 - Challenge : lancer le chargement
*/

// TODO : faire une jolie page d'erreur 404:



const Blog = () => {

    // useState retoune un tableau à deux éléments
    console.log(useState('coucou'));

    const [posts, setPosts] = useState([]);
    /*  équivalent =>
        this.state = {
            posts: []
        }

        et setPosts(NOUVELLE_valeur) serait un peut l'équivalent de : 
            this.setState({
                posts: NOUVELLE_VALEUR
            })
        */

        //const[loading, setLoading] = useState(false);

        /** indique si on est en cours de chargement */
        const [loading, setLoading] = useState(false);
 
    const loadPosts = () => {
        console.log('il faut charger les articles');

        // TODO faire appel à une API et récupérer la réponse puis appeler setPosts
        // TODO avec ce qu'on a récupéré
        //setPosts(postsData);
    };


    return (
        <div className="blog">
            <Header categories={categoriesData} />
            <button onClick={loadPosts} type="button">Charger les articles</button>
            { loading && <div>Chargement en cours</div>}
            <Switch>
            <Redirect from="/jquery" to="/autre" />
                {categoriesData.map((category) => (

                <Route exact path={category.route} key={category.label}>
                    <Posts posts={getPostsByCategory(posts, category.label)} />
                </Route>

                ))}
                <Route>
                    <div>
                        <h1>Ooâss, la page n'existe pas</h1>
                        Mais on a plein d'articles, regarde par exemple <Link to="/React">notre page sur React</Link>
                    </div>
                </Route>
            </Switch>
            <Footer />
        </div>
    );
}

export default Blog;