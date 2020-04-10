import React from "react";
import {Link} from "react-router-dom";

import styles from "./style/App.module.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

class Menu extends React.Component{
    render() {
        return (
            <div className={cx('Menu')}>
                    <ul id={'nav'}>
                        <li><Link to="/projects">Проекты</Link></li>
                    </ul>
            </div>
        );
    }
}

export default Menu;