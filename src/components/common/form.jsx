import React, { Component } from 'react';
import Input from './input';
import Joi from 'joi-browser';

class Form extends Component {
    state = {
        data: {},
        errors: {}
    };

    validate = () => {
        const options = { abortEarly: false };
        const { error } = Joi.validate(this.state.data, this.schema, options);
        if (!error) return null;

        const errors = {};
        for (let item of error.details) errors[item.path[0]] = item.message;
        return errors;
    };

    validateProperty = ({name, value}) => {
        if (name === 'username'){
            if(value.trim() === '') return "Username is required.";
        }
        if (name === 'password'){
            if(value.trim() === '') return "Password is required.";
        }
        if (name === 'name'){
            if(value.trim() === '') return "Name is required.";
        }
        if (name === 'title'){
            if(value.trim() === '') return "Title is required.";
        }
        if (name === 'genre'){
            if(value.trim() === '') return "Genre is required.";
        }
        if (name === 'numberInStock'){
            if(value.trim() === '') return "Number In Stock is required.";
        }
        if (name === 'rate'){
            if(value.trim() === '') return "Rate is required.";
        }
    };

    handleSubmit = e => {
        e.preventDefault();

        const errors = this.validate();
        console.log(errors);
        this.setState({ errors: errors || {} });
        if (errors) return;

        this.doSubmit();
    };

    handleChange = ({ currentTarget: input }) => {

        const errors =  {...this.errors};
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const data = { ...this.state.data };
        data[input.name] = input.value;
        this.setState({ data, errors });
    };

    renderButton(label) {
        return (
            <button
                // enable/disable button
                disabled={this.validate()}
                className="btn btn-primary">
                {label}
            </button>
        );
    }

    renderInput(name, label, type = 'text') {
        const { data, errors } = this.state;

        return (
            <Input
                autoFocus
                type={type}
                name={name}
                value={data[name]}
                label={label}
                onChange={this.handleChange}
                error={errors[name]}
            />
        );
    }
}

export default Form;