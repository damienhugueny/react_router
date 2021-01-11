import React from 'react';
import PropTypes from 'prop-types';

import './posts.scss';

import Post from './Post';

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
    posts : PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        }).isRequired,
    ).isRequired,
};

export default Posts;