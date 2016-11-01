import React from 'react';


export default class NewTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }

    }


    handleCreate() {

    }



    render() {
        return (
            <form className="pure-form">
                <fieldset>
                    <legend>新增代办事项</legend>
                    <input type="text" value={this.state.value} onChange={e => this.setState({value: e.target.value})}/>
                    <button type="button" className="pure-button pure-button-primary" onClick={this.handleCreate}>增加</button>
                </fieldset>
            </form>
        )
    }
}