import React from 'react';
import PropTypes from 'prop-types';

import './posts.scss';

import Post from './Post';

/**
 * Affiche des articles
 * @version 2.0.4
 * @author Damien.H
 * 
 * Depuis la version 1.8.4, affichage en utilisant flex
 */

const Posts = ({ posts }) => (
    <main className="posts">
        <h1 className ="posts-title">Dev of thrones</h1>
        <div className="posts-list">
        {posts.map((post) => (
            <Post key={post.id} {...post} />
        ))}

        </div>
    </main>
);

Posts.prototype = {
    /** les articles à afficher */
    posts : PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        }).isRequired,
    ).isRequired,
    // Si la prop est de type func, préciser les arguments
    /** Appelé quand le valeur de l'input change
     * @param {string} newValue new value of the input
     */
    // handleChange: PropTypes.string.isRequired,
};

export default Posts;