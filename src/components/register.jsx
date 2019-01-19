import React from 'react';
import Form from './common/form';
import Joi from 'joi-browser';


class RegisterForm extends Form {
    state = {
        data: { username: '', password: '', name: ''},
        errors: {}
    }

    doSubmit = () => {
        // call the server
        console.log("Submitted");
    };

    shema = {
        username: Joi.string().required().label('Username'),
        password: Joi.string().required().label('Password'),
        // name: Joi.string().required().label('Name')
    }

    render() {
        return ( <div>
            <h1>Register</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('username', 'Username')}
                    {this.renderInput('password', 'Password')}
                    {this.renderInput('name', 'Name')}
                    {this.renderButton('Register')}
                </form>
        </div> );
    }
}

export default RegisterForm;