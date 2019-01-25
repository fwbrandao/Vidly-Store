import React, { Component } from "react";
import { Link } from 'react-router-dom';
import MoviesTable from "./moviesTable";
import FilterGenre from "./common/filterGenre";
import Pagination from "./common/pagination";
import PopularMovies from "./popular/popularMovies";
import { getMovies, deleteMovie } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import { paginate } from "../utils/paginate";
import _ from 'lodash';
// import SearchBox from "./searchBox";
import "./movies.css";

class Movies extends Component {
    state = {
        movies: [],
        genres: [],
        currentPage: 1,
        pageSize: 4,
        searchQuery: "",
        selectedGenre: null,
        sortColumn: { path: "title", order: "asc" }
    };

    componentDidMount() {
        const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
        this.setState({ movies: getMovies(), genres });
      }

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies: movies });

    deleteMovie(movie._id);
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
    this.setState({ selectedGenre: genre, searchQuery: "", currentPage: 1 });
  };

  handleSearch = query => {
    this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
  };

  handleSort = sortColumn => {
      this.setState({ sortColumn });
    };

    getPageData = () => {
    const {
            pageSize,
            currentPage,
            sortColumn,
            selectedGenre,
            searchQuery,
            movies: allMovies
        } = this.state;

        let filtered = allMovies;
        if (searchQuery)
        filtered = allMovies.filter(m =>
            m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
        );
        else if (selectedGenre && selectedGenre._id)
        filtered = allMovies.filter(m => m.genre._id === selectedGenre._id);

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
        <Link className="btn btn-primary addBtn" to="/movies/new">Add New Movie</Link>
        <p className="moviesCount" ><span>Showing {totalCount} Movies.</span></p>
        {/* <SearchBox value={searchQuery} onChange={this.handleSearch} /> */}
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
