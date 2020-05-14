import React, {Component} from "react";
import {connect} from 'react-redux';
import TrackerForm from "./TaskForm";
import TrackersView from "./TasksView";
import PropTypes from 'prop-types';

import styles from './style/ProjectView.module.scss';

import axios from 'axios';
import classnames from 'classnames/bind';
import {setTasks} from "./actions";
import Loader from "./Loader";
const cx = classnames.bind(styles);

const mapStateToProps=state=>({
    trackers: state.trackers,
    URL: state.URL,
    token: state.token
});

const mapDispatchToProps = dispatch => ({
    setTasks: (tasks) => dispatch(setTasks(tasks))
});

class ProjectView extends Component{
    constructor(props) {
        super(props);
        this.state={
            loading: false,
            id: props.match.params.projectId
        }
    }

    componentDidMount() {
        this.getProjectTasks();
    }

    getProjectTasks = () =>{
        this.setState({loading: true});
        const URL = `${this.props.URL}/api/projects/${this.state.id}/tasks/`;
        const header = {Token: this.props.token};
        axios.get(URL, {headers: header})
            .then(response => {
                console.log(response);
                this.props.setTasks(response.data);
                this.setState({loading: false});
            })
            .catch(error => {
                alert("Failed get project tasks")
            })
    };

    render() {
        return (
            <div className={cx('ProjectView')}>
                <TrackerForm id={this.state.id}/>
                {
                    (this.state.loading)
                        ?<Loader/>
                        :<TrackersView id={this.state.id}/>
                }
            </div>
        )
    }
}

ProjectView.propTypes = {
    trackers: PropTypes.array,
    URL: PropTypes.string,
    token: PropTypes.string,
    setTasks: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectView);