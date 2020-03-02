import React from "react";


class  TrackersView extends React.Component{

    render(){
        return (
            <div>
                <div><h1>Список трекеров</h1></div>
                    <button id={'sort_by_name'} onClick={this.props.sortByName} className={'sortButton'}>Сортировка по имени</button>
                    <button id={'sort_by_priority'} onClick={this.props.sortByPriority} className={'sortButton'}>Сортировка по приоритету</button>
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