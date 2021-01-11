import React from 'react';

import './posts.scss';

import Post from './Post';

const Posts = () => (
    <main className="posts">
        <h1 className ="posts-title">Dev of thrones</h1>
        <div className="posts-list">
           <Post />
           <Post />
           <Post />
        </div>
    </main>
);

export default Posts;