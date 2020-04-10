import React from "react";
import styles from './style/TrackerForm.module.scss'
import {addTracker} from "./actions";
import {connect} from "react-redux";

import classnames from 'classnames/bind';
const cx = classnames.bind(styles);

const mapDispatchToProps = dispatch => ({
    addTracker: (data) => dispatch(addTracker(data))
});

class TrackerForm extends React.Component{

    state ={
        name : '',
        description : '',
        priority : ''
    };

    handleAddTrackerClick=()=>{
        let dict = this.state;
        for(let key in dict){
            if (dict[key].trim() === ''){
                alert("Вы не заполнили все поля");
                return;
            }
        }
        this.setState({name:'', description: '', priority: ''});
        this.props.addTracker({tracker: dict, project_id: this.props.id});
    };

    handleChangeName=(event)=>{
        this.setState({name: event.target.value})
    };

    handleChangeDescription=(event)=>{
        this.setState({description: event.target.value})
    };

    handleChangePriority=(event)=>{
        let value = event.target.value;
        if (value && !isNaN(parseInt(value)))  this.setState({priority: event.target.value});
    };

    render() {
        return (
            <div className={cx('TrackerForm')}>
                <div className={cx('Form')}>
                    <div className={cx('FormItem')}>
                        <h1>Название</h1>
                        <input type={'text'} value={this.state.name} onChange={this.handleChangeName}/>
                    </div>
                    <div className={cx('FormItem')}>
                        <h1>Приоритет</h1>
                        <input type={'number'} pattern={'^[ 0-9]+$'} onChange={this.handleChangePriority} value={this.state.priority} />
                    </div>
                    <div className={cx('FormItem')}>
                        <h1>Описание</h1>
                        <input type={"text"}  onChange={this.handleChangeDescription} value={this.state.description}/>
                    </div>
                </div>
                <div className={cx('addButton')}>
                    <button  onClick={this.handleAddTrackerClick}>Добавить задачу</button>
                </div>
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(TrackerForm);