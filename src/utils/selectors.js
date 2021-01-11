// fichier pour stocker des fonctions qui permettent de sélectionner des choses
// => export nomé parce qu'on voudra exporter plusieurs fonctions

// JSDoc, documentation pour les humains : /**  */

/**
 * Get posts of a given category, or all posts if category is 'Acceuil
 * @param {Array} posts All posts
 * @param {String} category Category to filter by
 * @return Array containing posts of given category
 */

export const getPostsByCategory = ( posts, category) => {
    if(category === 'Accueil') {
        return posts;
    }
    // TODO retourner les articles de la catégorie
    return posts.filter((post) => post.category === category);
    

};

