import React from 'react';
import PropTypes from 'prop-types';

const Post = ({ title, category, excerpt }) => (
    <article className="post">
        <h2 className="post-title">{title}</h2>
        <div className="post-category">{category}</div>
        <p className="post-excerpt">{excerpt}</p>

    </article>
);

Post.propTypes = {
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
};

export default Post;