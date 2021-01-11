import React from 'react';

import './blog.scss';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Posts from '../Posts/Posts'


class Blog extends React.Component {


    render() {

        return (
            <div className="blog">
                <Header />
                <Posts />
                <Footer />
            </div>
        );
    }

};

export default Blog;