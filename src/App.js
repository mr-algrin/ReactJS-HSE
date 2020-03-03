import React from 'react';
import './App.css';
import Menu from "./Menu";

class App extends React.Component{

    state = {
        trackers : []
    };
    updateData = (value) => {
        console.log('App', value);
        this.setState({ trackers : this.state.trackers.concat([value]) })
    };

    handleSortByName=()=>{
        this.setState(state=>{
            const newState = { ...this.state, trackers: [...this.state.trackers]};
            newState.trackers.sort((a, b) => a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1);
            return newState;
        });
        console.log(this.props.trackers);
    };

    handleSortByPriority=()=>{
        this.setState(state=>{
            const newState = { ...this.state, trackers: [...this.state.trackers]};
            newState.trackers.sort((a, b) => a.priority - b.priority);
            return newState;
        });
    };

    render() {
        return (
            <body>
                <div className="App">
                    <Menu updateData={this.updateData}  trackers={this.state.trackers} sortByName={this.handleSortByName}
                          sortByPriority={this.handleSortByPriority}/>
                </div>
            </body>
        );
    }
}

export default App;
