import React, {Component} from "react";
import {connect} from 'react-redux';
import TrackerForm from "./TrackerForm";
import TrackersView from "./TrackersView";

import styles from './style/ProjectView.module.scss';

import classnames from 'classnames/bind';
const cx = classnames.bind(styles);



const mapStateToProps=state=>({
    trackers: state.trackers
});

class ProjectView extends Component{
    constructor(props) {
        super(props);
        this.state={
            id: props.match.params.projectId
        }
    }


    render() {
        return (
            <div className={cx('ProjectView')}>
                {
                    (this.props.trackers[this.state.id] === undefined)
                        ?<h1 className={cx('InvalidId')}>Invalid id</h1>
                        :<div>
                            <TrackerForm id={this.state.id}/>
                            <TrackersView id={this.state.id}/>
                        </div>
                }
            </div>
        )
    }
}

export default connect(mapStateToProps, null)(ProjectView);