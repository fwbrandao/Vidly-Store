import React from 'react';
import Form from './common/form';
import Joi from 'joi-browser';
import { login } from '../services/authService';


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
            const { data: jwt } = await login(data.username, data.password);
            // saves JWT in the browser localStorage
            localStorage.setItem('token', jwt);
            // redirects user to homepage
            this.props.history.push('/');
            console.log("Submitted");
            console.log(jwt);
        } catch (ex) {
            if (ex.response && ex.response.status === 400 ) {
                const errors = { ...this.state.errors };
                errors.username = ex.response.data;
                this.setState({ errors });
            }
        }
    };

    render() {
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