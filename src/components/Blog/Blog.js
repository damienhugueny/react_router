import React from 'react';

import './blog.scss';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Posts from '../Posts/Posts'

import categoriesData from '../../data/categories';
import postData from '../../data/posts';


class Blog extends React.Component {


    render() {

        return (
            <div className="blog">
                <Header categories={categoriesData} currentCategory="Accueil"/>
                <Posts posts={postData} />
                <Footer />
            </div>
        );
    }

};

export default Blog;