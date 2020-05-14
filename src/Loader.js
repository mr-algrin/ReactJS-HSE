import React, {PureComponent} from "react";

import styles from './style/Loader.module.scss'
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);

class Loader extends PureComponent{
    render() {
        return (
            <div className={cx('Loader')}>
                <div className={cx("item-1")}/>
                <div className={cx("item-2")}/>
                <div className={cx("item-3")}/>
                <div className={cx("item-4")}/>
                <div className={cx("item-5")}/>
            </div>
        )
    }
}

export default Loader;