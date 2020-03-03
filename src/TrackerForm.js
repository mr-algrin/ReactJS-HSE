import React from "react";

class TrackerForm extends React.Component{

    state ={
        name : '',
        description : '',
        priority : ''
    };

    handleAddTrackerClick=()=>{
        console.log('TestCLick');
        let dict = this.state;
        for(let key in dict){
            if (dict[key].trim() === ''){
                alert("Вы не заполнили все поля");
                return;
            }
        }
        this.setState({name:'', description: '', priority: ''});
        this.props.updateData(dict);
        console.log(dict);
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
            <div className="App">
                <div>
                    <h1 id={'tracker_name'}>Название</h1>
                    <input type={'text'} value={this.state.name} onChange={this.handleChangeName}/>
                </div>
                <div>
                    <h2 id={'tracker_description'}>Описание</h2>
                    <textarea name="tracker_text" id="" cols="30" rows="10"  onChange={this.handleChangeDescription} value={this.state.description}></textarea>
                </div>
                <div>
                    <h2 id={'tracker_priority'} >Приоритет</h2>
                    <form><input type={'number'} pattern={'^[ 0-9]+$'} onChange={this.handleChangePriority} value={this.state.priority} /></form>
                </div>
                <button id={'add'} onClick={this.handleAddTrackerClick}>Добавить</button>
            </div>
        );
    }
}

export default TrackerForm;