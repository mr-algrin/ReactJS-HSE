import React from 'react';
import Menu from "./Menu";
import {BrowserRouter as Router, Route} from "react-router-dom";
import styles from "./style/App.module.scss";
import classnames from "classnames/bind";
import {Redirect} from "react-router-dom";

import {createStore} from 'redux';
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import Projects from "./Projects";
import ProjectView from "./ProjectView";
import Login from './Login';
import Header from './Header';

import Main from "./Main";

const cx = classnames.bind(styles);
const store = createStore(rootReducer);

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div className={cx("App")}>
                    <Header/>
                    <Main/>
                </div>
            </Provider>
        )
    }
}

export default App;