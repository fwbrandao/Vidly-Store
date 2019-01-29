import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getMovies } from "../../services/fakeMovieService";
import './popularMovies.css'


class PopularMovies extends Component {
    state = {
        movies: []
    };

    componentDidMount() {
        this.setState({ movies: getMovies()});
      }

      getPageData = () => {
        const {
                movies
                } = this.state;

        return { data: movies };
        };

    render() {

        const { data: movies } = this.getPageData();
        return (
        <div className="container popular-articles">
            <header className="popular-header header-card white-underline-links">
                <h2 className="header-card-title">Popular Movies</h2>
                <p className="header-card-sponsor">January</p>
            </header>
            {movies.map(movie => (
            <div className="mini-card-grid">
                <article className="mini-card module module-article article">
                <header className="mini-article-card-header">
                    <div className="mini-article-card-title">
                    <div className="mini-article-subhead">
                    Movie
                        <time datetime="2019-01-01">Jan 1, 2019</time>
                    </div>
                    </div>
                    <Link to={`/movies/${movie._id}`}>
                    <h2><a className="article-card-header read-article">{movie.title}</a></h2>
                    </Link>
                    <p className="mini-article-subhead">{movie.genre.name}</p>
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
            ))}
        </div>
        );
    }
}

export default PopularMovies;