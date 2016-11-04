import React from 'react';


export default class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.filter === 'todo') {
            return (
                <div>
                    <a href="#" onClick={() => this.props.onChangeFilter('all')}>show all</a>
                </div>
            )
        }
        return (
            <div>
                <a href="#" onClick={() => this.props.onChangeFilter('todo')}>show todo</a>
            </div>
        );
    }
}