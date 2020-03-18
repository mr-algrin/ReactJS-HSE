import React from 'react';
import Menu from "./Menu";
import {BrowserRouter as Router, Route} from "react-router-dom";
import styles from "./style/App.module.scss";
import classnames from "classnames/bind";
import TrackerForm from "./TrackerForm";
import TrackersView from "./TrackersView";

import {createStore} from 'redux';
import { Provider } from "react-redux";
import rootReducer from "./reducers";

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
                            <Route exact path={"/add_tracker"} component={TrackerForm} />
                            <Route path={"/list_trackers"} component={TrackersView}/>
                        </div>
                    </Router>
                </div>
            </Provider>
        );
    }
}

export default App;
