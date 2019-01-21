import React from 'react';
import Form from './common/form';

class MovieForm extends Form {
    state = {
        data: { title: '', genre: '', numberInStock: '', rate: ''},
        errors: {}
    };

    render() {
        return (
            <div>
                <h1>Movie Form {} </h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('title', 'Title')}
                    {this.renderInput('genre', 'Genre')}
                    {this.renderInput('numberInStock', 'Number in Stock')}
                    {this.renderInput('rate', 'Rate')}
                </form>
                <button
                    className="btn btn-primary"
                    onClick={() => this.push("/movies")}>
                    Save
                </button>
            </div>
        );
    }
};

export default MovieForm;