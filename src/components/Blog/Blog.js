import React, { useState } from 'react';

// librairie pour faciliter les appels AJAX
import axios from 'axios';


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
  fonction va relancer le rendu du composant, il faut fournir la nouvelle
  valeur comme argument
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
        
        setLoading(true);

        // TODO faire appel à une API et récupérer la réponse puis appeler setPosts
        // TODO avec ce qu'on a récupéré
        //setPosts(postsData);

        // Afficher la div chargement

        console.log('il faut charger les articles'); 

        axios.get('https://oclock-open-apis.now.sh/api/blog/posts')
            .then((response) => {
                // callback éxécutée en cas de succès (par exemple code de retour 200)
                //console.log('success : ' + response); 
                console.log(response.data)
                setPosts(response.data);
                
            })
            .catch((error) => {
                // callback éxécutée en cas d'échec (par exemple code de retour 404)
                console.log('error: ' + error) 
            })
            .finally(() => {
                // callback éxécutée dans tous les cas, après succès ou échec
                // permet dnotament d'enlever un loader
                //console.log('finally'); 
                setLoading(false);
            });

        console.log('On a lancé le chargement des articles');

        // affiche 'false' =>  la mise à jour du state est asynchrone (pareil avec
        // setState), on à accès à la nouvelle valeur seulement au moment du rendu
        // suivent du composant
        console.log(loading);
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