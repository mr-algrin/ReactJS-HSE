import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import PropTypes from 'prop-types';

import {sortByName, sortByPriority} from './actions'

import styles from './style/TasksView.module.scss'
import classnames from "classnames/bind";
const cx = classnames.bind(styles);

const mapStateToProps = state => ({
    trackers: state.trackers,
    URL: state.URL,
    token: state.token
});

const mapDispatchToProps = dispatch => ({
    sortByName: (id) => dispatch(sortByName(id)),
    sortByPriority: (id) => dispatch(sortByPriority(id))
});

class TaskItem extends React.Component{
    constructor(props) {
        console.log(props.task);
        super(props);
        const status = (props.task.completed)?"complete":"progress";
        this.state = {
            status: status,
            checked: props.task.completed
        }
    }

    changeStatus = () =>{
        const status = (this.state.status === "complete")?"progress":"complete";
        const checked = !this.state.checked;
        this.setState({checked: checked, status: status});
        let task = this.props.task;
        task.completed = checked;
        this.props.updateTask(task);
    };

    render() {
        return (
            <div className={cx("TaskItem", {[`TaskItem-${this.state.status}`]: true})}>
                <h3 className={cx("TaskName")}>{this.props.task['name']}</h3>
                <div className={cx("TaskDescription")} >{this.props.task['description']}</div>
                <div className={cx("TaskItemStatus")}>
                    <div className={cx("TaskPriority")}>Priority {this.props.task['priority']}</div>
                    <input className={cx('TaskChecked')} onChange={this.changeStatus} type={"checkbox"} checked={this.state.checked}/>
                </div>
            </div>
        )
    }
}

TaskItem.propTypes = {
    task: PropTypes.object,
    updateTask: PropTypes.func
};

class TasksView extends React.Component{

    updateTask = task =>{
        const URL = `${this.props.URL}/api/project/${this.props.id}/tasks/${task.id}`;
        task.projectId = parseInt(this.props.id);
        delete task.id;
        console.log(task, URL);
        axios.put(URL, task, {headers: {Token: this.props.token}})
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                alert("Failed update task");
            })
    };

    render(){
        return (
            <div className={cx('TasksView')}>
                <div className={cx("TaskInfo")}>
                    <div className={cx("TaskStatus")}>
                        <div className={cx("Complete")}/>
                        <span>Complete</span>
                    </div>
                    <div className={cx("TaskStatus")}>
                        <div className={cx("Progress")}/>
                        <span>Progress</span>
                    </div>
                    <div className={cx("SortButtons")}>
                        <button onClick={()=>(this.props.sortByName(this.props.id))} title={"Sort by name"} className={cx("SortButton")}>A&#11015;&#11014;Z</button>
                        <button onClick={()=>(this.props.sortByPriority(this.props.id))} title={"Sort by priority"} className={cx("SortButton")}>1&#11015;&#11014;3</button>
                    </div>
                </div>
                <div className={cx("TasksList")}>
                    {this.props.trackers.map((item, idx) => (
                        <TaskItem updateTask={this.updateTask} key={item.id} task={item}/>
                    ))}
                </div>

            </div>
        );
    }
}

TasksView.propTypes = {
    trackers: PropTypes.array,
    URL: PropTypes.string,
    token: PropTypes.string,
    sortByName: PropTypes.func,
    sortByPriority: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksView);