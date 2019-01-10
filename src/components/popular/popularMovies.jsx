import React, { Component } from 'react';
import './popularMovies.css'

class PopularMovies extends Component {
    render() {
        return (
        <div className="popular-articles">
            <header className="popular-header header-card white-underline-links">
                <h2 className="header-card-title">Popular Movies</h2>
                <p className="header-card-sponsor">January</p>
            </header>
            <div className="mini-card-grid">
                <article className="mini-card module module-article article">
                <header className="mini-article-card-header">
                    <div className="mini-article-card-title">
                    <div className="mini-article-subhead">
                    Movie
                        <time datetime="2019-01-01">Jan 1, 2019</time>
                    </div>
                    </div>
                    <h2><a className="article-card-header read-article" href="/">Terminator Salvation</a></h2>
                </header>
                <div className="mini-article-meta">
                    <div className="mini-article-byline">
                        <div className="author-avatar">
                            <a className="author-name" href="/">
                                <img className="avatar avatar-80 photo" alt=""/>
                            </a>
                            <svg className="half-circle">
                            </svg>
                        </div>
                    </div>
                </div>
                </article>
            </div>
        </div>
        );
    }
}

export default PopularMovies;