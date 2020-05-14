import React, {Component} from "react";
import { connect } from "react-redux";
import {Link} from "react-router-dom";
import axios from "axios";
import PropTypes from 'prop-types';

import DeleteIcon from './images/delete.png'

import {createProject, removeProject, setProjects} from "./actions";

import classnames from "classnames/bind";
import styles from "./style/Projects.module.scss";
import Loader from "./Loader";
const cx = classnames.bind(styles);

const mapStateToProps=state=>({
    projects: state.projects,
    URL: state.URL,
    token: state.token
});

const mapDispatchToProps = dispatch => ({
    setProjects: (projects) => dispatch(setProjects(projects)),
    createProject: (project) => dispatch(createProject(project)),
    removeProject: (id) => dispatch(removeProject(id))
});

function ProjectItem(props) {
    return (
        <div key={props.project.id} className={cx('projectItem')}>
            <h2>
                <Link style={{color: 'black'}} to={`/project/${props.project.id}`}>
                    {props.project.name}
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
        project_name: '',
        loading: false
    };

    changeName=(event)=>{
        this.setState({project_name: event.target.value});
    };

    createProject=(event)=>{
        if (this.state.project_name.length){
            this.setState({project_name: ''});
            const data = {name: this.state.project_name};
            const header = {Token: this.props.token};
            axios.post(`${this.props.URL}/api/projects/`, data, {headers: header})
                .then(response => {
                    console.log(response);
                    this.props.createProject(response.data);
                })
                .catch(error => {
                    alert("Failed create project");
                })
        }
        else {
            alert("Project name is empty");
        }
    };

    removeProject=(id)=>{
        this.props.removeProject(id);
    };

    componentDidMount() {
        this.getProjects();
    }

    getProjects = () => {
        this.setState({loading: true});
        const header = {
            Token: this.props.token
        };
        axios.get(`${this.props.URL}/api/projects/`, {headers: header})
            .then(response=>{
                console.log(response);
                this.props.setProjects(response.data);
                this.setState({loading: false});
            })
            .catch(error => {
                alert("Failed to get projects")
            })
    };

    render() {
        return (
            <div className={cx('Projects')}>
                <div className={cx('createProject')}>
                    <input placeholder={'Project name'} onChange={this.changeName} type={'text'} value={this.state.project_name}/>
                    <button onClick={this.createProject} className={'createProjectButton'}>
                        Create project
                    </button>
                </div>
                <div className={cx('listProjects')}>
                    {
                        (this.state.loading)
                        ?<Loader/>
                        :this.props.projects.map((project) => (<ProjectItem key={project.id} removeAction={this.removeProject} project={project}/>))
                    }
                </div>
            </div>
        )
    }
}

Projects.propTypes = {
    projects: PropTypes.array,
    URL: PropTypes.string,
    token: PropTypes.string,
    setProjects: PropTypes.func,
    createProject: PropTypes.func,
    removeProject: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);