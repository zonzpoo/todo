import React from 'react';
import autoBind from 'react-autobind';

class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        if (e.target.checked) {
            this.props.onComplete(this.props.todo.id);
        } else {
            this.props.onReopen(this.props.todo.id);
        }
    }

    render() {
        return (
            <div className="pure-g">
                <div className="pure-u-1-24">
                    <input type="checkbox" defaultChecked={this.props.todo.done} onChange={this.handleChange}/>
                </div>
                <div className="pure-u-23-24">
                    <span style={{letterSpacing: 'normal', textAlign: 'left'}}>
                        {this.props.todo.content}
                    </span>
                </div>
            </div>
        )
    }

}


export default class List extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>{
                this.props.todos
                    .map(todo => (<ListItem key={todo.id} todo={todo} onComplete={this.props.onComplete}
                                            onReopen={this.props.onReopen}/>))}
            </div>
        )
    }
}