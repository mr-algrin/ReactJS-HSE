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
        this.state.trackers.sort((a, b) => a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1);
        console.log(this.props.trackers);
        this.forceUpdate();
    };

    handleSortByPriority=()=>{
        this.state.trackers.sort((a, b) => a.priority - b.priority);
        this.forceUpdate();
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
