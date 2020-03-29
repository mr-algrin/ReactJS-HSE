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
                        <li><Link to="/add_tracker">Добавление трекера</Link></li>
                        <li><Link to="/list_trackers">Список трекеров</Link></li>
                    </ul>
            </div>
        );
    }
}

export default Menu;