import React from 'react';
import Form from './common/form';
import Joi from 'joi-browser';
import auth from '../services/authService';
import { Redirect } from 'react-router-dom';


class LoginForm extends Form {
    state = {
        data: { username: '', password: ''},
        errors: {}
    };

    schema = {
        username: Joi.string().required().label('Username'),
        password: Joi.string().required().label('Password'),
    }

    doSubmit = async () => {
        // call the server
        try {
            const { data } = this.state;
            // Json web token
            await auth.login(data.username, data.password);
            // redirects user to homepage
            const { state } = this.props.location;
            window.location = state ? state.from.pathname : '/';
            console.log("Submitted");
        } catch (ex) {
            if (ex.response && ex.response.status === 400 ) {
                const errors = { ...this.state.errors };
                errors.username = ex.response.data;
                this.setState({ errors });
            }
        }
    };

    render() {
        // redirect to home if loged user try to go to /login
        if (auth.getCurrentUser()) return <Redirect to='/' />
        
        return  (
            <div>
                <h1>Login</h1>
                    <form onSubmit={this.handleSubmit}>
                        {this.renderInput('username', 'Username')}
                        {this.renderInput('password', 'Password', 'password')}
                        {this.renderButton('Login')}
                    </form>
                </div>
            );
        }
    }

export default LoginForm;