import React from "react";
import styles from './style/TaskForm.module.scss'
import {addTracker} from "./actions";
import {connect} from "react-redux";
import axios from 'axios';

import AddTaskIcon from './images/add_task.png'

import classnames from 'classnames/bind';
const cx = classnames.bind(styles);

const mapDispatchToProps = dispatch => ({
    addTracker: (task) => dispatch(addTracker(task))
});

const mapStateToProps = state => ({
    token: state.token,
    URL: state.URL
});

class TaskForm extends React.Component{

    state ={
        name : '',
        description : '',
        priority : 1
    };

    handleAddTaskClick=()=>{
        let task = this.state;
        if (task.name === "" || task.description === "" || (task.priority>3 || task.priority<1)){
            alert("Some fields are empty");
            return;
        }
        const URL = `${this.props.URL}/api/projects/${this.props.id}/tasks/`;
        const header = {Token: this.props.token};
        console.log(URL, header, task);
        axios.post(URL, task, {headers: header})
            .then(response => {
                console.log(response.data);
                this.props.addTracker(response.data);
            })
            .catch(error => {
                alert("Failed to create task")
            });
        this.setState({name:'', description: '', priority: 1});
    };

    handleChangeName=(event)=>{
        this.setState({name: event.target.value})
    };

    handleChangeDescription=(event)=>{
        this.setState({description: event.target.value})
    };

    handleChangePriority=(event)=>{
        let value = event.target.value;
        if (value && !isNaN(parseInt(value)))  this.setState({priority: parseInt(value)});
    };

    render() {
        return (
            <div className={cx('TaskForm')}>
                <div className={cx('Form')}>
                    <div className={cx('FormItem')}>
                        <input placeholder={'Name'} type={'text'} value={this.state.name} onChange={this.handleChangeName}/>
                    </div>
                    <div className={cx('FormItem')}>
                        <input placeholder={'Priority'} type={'number'} pattern={'^[ 0-9]+$'} onChange={this.handleChangePriority} value={this.state.priority} />
                    </div>
                    <div className={cx('FormItem')}>
                        <input placeholder={'Description'} type={"text"}  onChange={this.handleChangeDescription} value={this.state.description}/>
                    </div>
                    <img onClick={this.handleAddTaskClick} className={cx('AddTaskIcon')} src={AddTaskIcon} alt={""} title={"Add task"}/>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);