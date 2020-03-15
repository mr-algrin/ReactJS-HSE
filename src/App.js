import React from 'react';
import Menu from "./Menu";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import styles from "./style/App.module.scss";
import classnames from "classnames/bind";
import TrackerForm from "./TrackerForm";
import TrackersView from "./TrackersView";

const cx = classnames.bind(styles);

class App extends React.Component{

    state = {
        trackers : []
    };
    updateData = (value) => {
        console.log('App', value);
        this.setState({ trackers : this.state.trackers.concat([value]) })
    };

    handleSortByName=()=>{
        this.setState(state=>{
            const newState = { ...this.state, trackers: [...this.state.trackers]};
            newState.trackers.sort((a, b) => a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1);
            return newState;
        });
        console.log(this.props.trackers);
    };

    handleSortByPriority=()=>{
        this.setState(state=>{
            const newState = { ...this.state, trackers: [...this.state.trackers]};
            newState.trackers.sort((a, b) => a.priority - b.priority);
            return newState;
        });
    };

    render() {
        return (
            <body>
                <div className={cx("App")}>
                    <Router>
                        <Menu updateData={this.updateData}  trackers={this.state.trackers} sortByName={this.handleSortByName}
                              sortByPriority={this.handleSortByPriority}/>
                        <div id={cx('Content')}>
                            <Route exact path={"/add_tracker"} render={()=><TrackerForm updateData={this.updateData}/>} />
                            <Route path={"/list_trackers"} render={()=><TrackersView trackers={this.state.trackers } sortByName={this.handleSortByName} sortByPriority={this.handleSortByPriority}/>}/>
                        </div>
                    </Router>
                </div>
            </body>
        );
    }
}

export default App;
