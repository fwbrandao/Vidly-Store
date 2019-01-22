import React from 'react';
import Form from './common/form';
import { Joi } from 'joi-browser';

class MovieForm extends Form {
    state = {
        genres: [],
        data: { title: '', genre: '', numberInStock: '', rate: ''},
        errors: {}
    };

    schema = {
        // title: Joi.string().required().label('Title'),
        // genre: Joi.string().required().label('Genre'),
        // numberInStock: Joi.string().required().min(0).max(100).label('Number in Stock'),
        // rate: Joi.string().required().min(0).max(10).label('Rate')
    }

    doSubmit = () => {
        // call the server
        console.log("Submitted");
    };

    render() {
        const { history, match, genres } = this.props;

        return (
            <div>
                <h1>Movie Form {match.params.id} </h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('title', 'Title')}
                        <div class="form-group">
                            <label for="exampleFormControlSelect1">Genre</label>
                            <select class="form-control" id="exampleFormControlSelect1">

                                <option>{this.state.genres.name}</option>
                            </select>
                        </div>

                    {this.renderInput('numberInStock', 'Number in Stock')}
                    {this.renderInput('rate', 'Rate')}
                </form>
                <button
                    className="btn btn-primary"
                    onClick={() => history.push("/movies")}>
                    Save
                </button>
            </div>
        );
    }
};

export default MovieForm;