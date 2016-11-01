import React from 'react';
import autoBind from 'react-autobind';

export default class NewTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        autoBind(this, handleCreate);

    }

    handleCreate() {
        this.props.onCreate(this.state.value);
        this.setState({value: ''})
    }


    render() {
        return (
            <form className="pure-form">
                <fieldset>
                    <legend>新增代办事项</legend>
                    <input type="text" value={this.state.value} onChange={e => this.setState({value: e.target.value})}/>
                    <button type="button" className="pure-button pure-button-primary" onClick={this.handleCreate}>增加
                    </button>
                </fieldset>
            </form>
        )
    }
}