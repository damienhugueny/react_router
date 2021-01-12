import React from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';


// nettoyer le code avec DOMPurify.sanitize(mon_contenu_à_nettoyer)
const createMarkup = (htmlCode) => {
    return {
        __html: DOMPurify.sanitize(htmlCode),
    };
}

// si on interprète le code HTML qui vient d'une saisie utilisateur, risque de 
// faille XSS => code Javascript interprété :  DANGER
// On peut utiliser une librairie pour "nettoyer" le code HTML et pouvoir
// l'interpréter sans risque => DOMPurify

const Post = ({ title, category, excerpt }) => (
    <article className="post">
        <h2 className="post-title">{title}</h2>
        <div className="post-category">{category}</div>
        <p className="post-excerpt" dangerouslySetInnerHTML={createMarkup(excerpt)}></p>
    </article>
);

Post.propTypes = {
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
};

export default Post;