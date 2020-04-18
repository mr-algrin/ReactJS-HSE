import React, {Component} from "react";
import { connect } from "react-redux";

import DeleteIcon from './images/delete.png'
import './style/Projects.module.scss'
import classnames from "classnames/bind";
import styles from "./style/Projects.module.scss";
import {createProject, removeProject} from "./actions";
import {Link} from "react-router-dom";

const cx = classnames.bind(styles);

const mapStateToProps=state=>({
    projects: state.projects
});

const mapDispatchToProps = dispatch => ({
    createProject: (project) => dispatch(createProject(project)),
    removeProject: (id) => dispatch(removeProject(id))
});

function ProjectItem(props) {
    return (
        <div key={props.project.id} className={cx('projectItem')}>
            <h2>
                <Link style={{color: 'black'}} to={`/project/${props.project.id}`}>
                    Проект:    {props.project.name}
                </Link>
            </h2>
            <img onClick={()=>(props.removeAction(props.project.id))}
                 src={DeleteIcon}
                 title={"Remove project"}
                 alt={""}/>
        </div>
    )
}

class Projects extends Component{
    state={
        project_name: ''
    };

    changeName=(event)=>{
        this.setState({project_name: event.target.value});
    };

    createProject=(event)=>{
        if (this.state.project_name.length){
            this.props.createProject({
                id: `f${(+new Date()).toString(16)}`,
                name: this.state.project_name
            });
            this.setState({project_name: ''});
        }
    };

    removeProject=(id)=>{
        this.props.removeProject(id);
    };

    render() {
        return (
            <div className={cx('Projects')}>
                <div className={cx('createProject')}>
                    <span>Название проекта</span>
                    <input onChange={this.changeName} type={'text'} value={this.state.project_name}/>
                    <button onClick={this.createProject} className={'createProjectButton'}>
                        Create project
                    </button>
                </div>
                <div className={cx('listProjects')}>
                    {
                        this.props.projects.map((project) => (<ProjectItem key={project.id} removeAction={this.removeProject} project={project}/>))
                    }
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects);