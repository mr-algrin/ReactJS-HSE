import React from "react";
import axios from 'axios';
import {connect} from "react-redux";
import styles from './style/Login.module.scss'
import PropTypes from 'prop-types';

import classnames from 'classnames/bind';
import {login} from "./actions";
const cx = classnames.bind(styles);

const mapDispatchToProps = dispatch => ({
    login: (token) => dispatch(login(token))
});
const mapStateToProps = state =>({
    URL: state.URL
});

class Login extends React.Component{
    state ={
        isError: false,
        errorMessage: "",
        login : '',
        password : ''
    };

    validateForm = () => {
        return this.state.login.length > 0 && this.state.password.length > 0;
    };

    setLogin = (event)=>{
        this.setState({login : event.target.value});
    };

    setPassword = (event)=>{
        this.setState({password : event.target.value});
    };

    handleLogin = () =>{
        this.setState({isError: false});
        const data = {
            login: this.state.login,
            password: this.state.password
        };
        const header = {'Content-Type': 'application/json'};
        axios.post(`${this.props.URL}/api/login/`, JSON.stringify(data), {headers: header})
            .then(response => {
                this.props.login(response.data.token);
            })
            .catch(error => {
                this.setState({isError: true, errorMessage: "Invalid login or password"});
            })
    };

    handleRegister = () =>{
        this.setState({isError: false});
        const data = {
            login: this.state.login,
            password: this.state.password
        };
        const header = {'Content-Type': 'application/json'};
        axios.post(`${this.props.URL}/api/register/`, JSON.stringify(data), {headers: header})
            .then(response => {
                this.props.login(response.data.token);
            })
            .catch(error => {
                this.setState({isError: true, errorMessage: "This login name is already taken"});
            })
    };

    render() {
        return (
            <div className={cx('Login')}>
                {this.state.isError && <span className={cx('LoginError')}>{this.state.errorMessage}</span>}
                <div className={cx('LoginForm')}>
                    <div>
                        <div className={cx('LoginFormLabel')}>Login</div>
                        <input  autoFocus
                                type="text"
                                value={this.state.login}
                                onChange={this.setLogin} className={cx('LoginFormInput')}/>
                    </div>
                    <div>
                        <div className={cx('LoginFormLabel')}>Password</div>
                        <input  value={this.state.password}
                                onChange={this.setPassword}
                                type="password" className={cx('LoginFormInput')}/>
                    </div>
                    <div>
                        <button onClick={this.handleLogin}  disabled={!this.validateForm()} type="submit" className={cx('LoginButton')}>
                            Login
                        </button>
                        <button onClick={this.handleRegister} disabled={!this.validateForm()} type="submit" className={cx('LoginButton')}>
                            Register
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

Login.propTypes = {
    URL: PropTypes.string,
    login: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);