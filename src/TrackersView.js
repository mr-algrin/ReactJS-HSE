import React from "react";


class  TrackersView extends React.Component{
    constructor(props) {
        super(props);
        this.handleSortByName = this.handleSortByName.bind(this);
        this.handleSortByPriority = this.handleSortByPriority.bind(this);
    }

    handleSortByName(event){
        this.props.trackers.sort((a, b) => a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1);
        console.log(this.props.trackers);
        this.forceUpdate();
    }

    handleSortByPriority(event){
        this.props.trackers.sort((a, b) => a.priority > b.priority ? 1 : -1);
        this.forceUpdate();
    }

    render(){
        return (
            <div>
                <div><h1>Список трекеров</h1></div>
                    <button id={'sort_by_name'} onClick={this.handleSortByName} className={'sortButton'}>Сортировка по имени</button>
                    <button id={'sort_by_priority'} onClick={this.handleSortByPriority} className={'sortButton'}>Сортировка по приоритету</button>
                <div id={'tracker_list'}>
                    {console.log(this.props.trackers)}
                    {this.props.trackers.map((item) => (
                        <div className={'item'}>
                            <div className={'view_name'}>Название: {item['name']}</div>
                            <div className={'view_description'} >Описание: {item['description']}</div>
                            <div className={'view_priority'}>Приоритет: {item['priority']}</div>
                        </div>
                    ))}
                </div>

            </div>
        );
    }
}

export default TrackersView;