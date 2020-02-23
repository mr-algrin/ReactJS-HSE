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
    render() {
        return (
            <body>
                <div className="App">
                    <Menu updateData={this.updateData}  trackers={this.state.trackers}/>
                </div>
            </body>
        );
    }
}

export default App;
