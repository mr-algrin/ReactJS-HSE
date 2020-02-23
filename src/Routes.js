import React,{Component} from 'react'
import {Route} from 'react-router-dom'
import TrackersView from "./TrackersView";
import TrackerForm from "./TrackerForm";

class Routes extends Component{
    render(){
        return(
            <div>
                <Route exact path={"/add_tracker"} component={TrackerForm}/>
                <Route path={"/list_trackers"} component={TrackersView}/>
            </div>
        )
    }
}

export default Routes;