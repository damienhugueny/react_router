import React, { useState, useEffect } from 'react';

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
import Posts from '../Posts/Posts';
import Loader from '../Loader/Loader';

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

    // !!! interdit d'utiliser les hooks dans des boucles if, ...
    // if(categories.lenght > 0) {
    //     const [categories, setCategories] = useState([]);
    // }

    const [categories, setCategories] = useState([]);
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
        const [loading, setLoading] = useState(true);

        /** indique si on est en cours de chargement pour les catégories */
        const [loadingCategories, setLoadingCategories] = useState(true);

    // useEffect est équivalent à componentDidMount + componentDidUpdate si écrit
    // comme ça :
    // useEffect(() => {
    //     console.log('appel à useEffect') 
    // });

    // useEffect écrit comme ça : exécute l'effet après le premier rendu, puis après les autres
    // rendus seulement si loading a changé
    // useEffect(() => {
    //     console.log('loading a changé de valeur')
    // }, [loading]); 
 
    const loadPosts = () => {
        
        //setLoading(true);

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

    const loadCategories = () => {
        console.log('il faut charger les catégories'); 

        axios.get('https://oclock-open-apis.now.sh/api/blog/categories')
            .then((response) => {
                // callback éxécutée en cas de succès (par exemple code de retour 200)
                //console.log('success : ' + response); 
                console.log(response.data)
                setCategories(response.data);
                
            })
            .catch((error) => {
                // callback éxécutée en cas d'échec (par exemple code de retour 404)
                console.log('error: ' + error) 
            })
            .finally(() => {
                // callback éxécutée dans tous les cas, après succès ou échec
                // permet dnotament d'enlever un loader
                //console.log('finally'); 
                setLoadingCategories(false);
            });

        console.log('On a lancé le chargement des catégories');
    };

    // et si le tableau de dépendances est vide : éxécuté seulement après le remier rendu du composant,
    // donc c'est équivalent à componentDidMount si le composent était écrit sous forme de classe
    useEffect(() => {
        //console.log('devait être affiché seulement après le premier rendu');
        loadPosts();
        loadCategories();
    }, []);

    console.log('rendu du composant blog');

    const displayLoader = loadingCategories || loading;

    if (displayLoader) return (<Loader/>);

    return (
        <div className="blog">

            {! loadingCategories &&  <Header categories={categories} />}

            { displayLoader && <Loader />}

            {! loadingCategories && (

                <Switch>
                    <Redirect from="/jquery" to="/autre" />
                    {categories.map((category) => (

                    <Route exact path={category.route} key={category.label}>
                        <Posts 
                            posts={getPostsByCategory(posts, category.label)}
                            category={category.label === 'Accueil'? 'Dev of thrones': category.label} />
                        </Route>

                    ))}
                    <Route>
                        <div>
                            <h1>Ooâss, la page n'existe pas</h1>
                            Mais on a plein d'articles, regarde par exemple <Link to="/React">notre page sur React</Link>
                        </div>
                    </Route>
                </Switch>
            )}
            <Footer years="2021"/>
        </div>
    );
}

export default Blog;