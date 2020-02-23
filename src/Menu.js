import React from "react";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import Routes from "./Routes";
import TrackerForm from "./TrackerForm";
import TrackersView from "./TrackersView";



class Menu extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Router>
                    <ul id={'nav'}>
                        <li><Link to="/add_tracker">Добавление трекера</Link></li>
                        <li><Link to="/list_trackers">Список трекеров</Link></li>
                    </ul>
                    {/*<div id={'content'}><Routes/></div>*/}
                    <div id={'content'}>
                        <Route exact path={"/add_tracker"} render={()=><TrackerForm updateData={this.props.updateData}/>} />
                        <Route path={"/list_trackers"} render={()=><TrackersView trackers={this.props.trackers}/>}/>
                    </div>
                </Router>
            </div>
        );
    }
}

export default Menu;