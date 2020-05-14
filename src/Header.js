import React from "react";

import Logo from './images/todo.png';

import styles from './style/Header.module.scss'
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);

class Header extends React.Component{
    render() {
        return (
            <div className={cx('Header')}>
                <div className={cx('Logo')}>
                    <img src={Logo} alt={''}/>
                    <span>to do list</span>
                </div>
                <div className={cx('HeaderLine')}/>
            </div>
        );
    }
}

export default Header;