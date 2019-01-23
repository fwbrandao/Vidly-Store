import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import FilterGenre from "./common/filterGenre";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./moviesTable";
import PopularMovies from "./popular/popularMovies";
import { NavLink } from 'react-router-dom';
import _ from 'lodash';
import "./movies.css";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    selectedGenre: "",
    sortColumn: { path: 'title', order: 'asc' }
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies: movies });
  };

  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleSort = sortColumn => {
      this.setState({ sortColumn });
    };

    getPageData = () => {
    const {
            currentPage,
            pageSize,
            sortColumn,
            movies: allMovies,
            selectedGenre
            } = this.state;
    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter(m => m.genre._id === selectedGenre._id)
        : allMovies;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: movies };
    };

  render() {
    const { length: count } = this.state.movies;
    const {
      currentPage,
      pageSize,
      sortColumn,
    } = this.state;

    if (count === 0) return <p>There are no Movies to display!</p>;

    const {totalCount, data: movies} = this.getPageData();

    return (
      <div className="row">
        <div className="col-md-3">
          <FilterGenre
            items={this.state.genres}
            onItemSelect={this.handleGenreSelect}
            selectedItem={this.state.selectedGenre}
          />
        </div>

        <div className="col-md-9">
        <div className="typewriter">
            <h1>Welcome to Vidly</h1>
        </div>
        <NavLink className="btn btn-primary addBtn" to="/movies/new">Add New Movie</NavLink>
        <p className="moviesCount" ><span>Showing {totalCount} Movies.</span></p>
          <MoviesTable
            movies={movies}
            sortColumn={sortColumn}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
            currentPage={currentPage}
          />
        </div>
        <div>
            <PopularMovies />
        </div>
      </div>
    );
  }
}

export default Movies;
