import React from "react";
import Login from "./Login";
import {BrowserRouter as Router, Redirect, Route} from "react-router-dom";
import Menu from "./Menu";
import ProjectView from "./ProjectView";
import Projects from "./Projects";
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

const mapStateToProps=state=>({
    isAuth: state.isAuth
});

class Main extends React.Component{
    render() {
        if (!this.props.isAuth) return <Login/>;
        else return (
            <Router>
                <Menu/>
                <Route exact path={'/project/:projectId'} component={ProjectView}/>
                <Route exact path={'/projects'} component={Projects}/>
                <Redirect from="/" to="projects" />
            </Router>
        )
    }
}

Main.propTypes = {
    isAuth: PropTypes.bool
};

export default connect(mapStateToProps)(Main);