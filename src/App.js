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

const cx = classnames.bind(styles);
const store = createStore(rootReducer);

class App extends React.Component{
    render() {
        return (
            <Provider store={store}>
                <div className={cx("App")}>
                    <Router>
                        <Menu/>
                        <div id={cx('Content')}>
                            <Route exact path={'/project/:projectId'} component={ProjectView}/>
                            <Route exact path={'/projects'} component={Projects}/>
                            <Redirect from="/" to="projects" />
                        </div>
                    </Router>
                </div>
            </Provider>
        );
    }
}

export default App;
