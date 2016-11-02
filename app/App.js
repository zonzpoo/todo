import React from 'react';
import * as Actions from './actions';
import autobind from 'autobind-decorator'
import {connect} from 'react-redux';
import NewTodo from './component/NewTodo';
import List from './component/List';
import Footer from './component/Footer';

@connect(state => ({todoApp: state.todoApp}))
export default class App extends React.Component {
    constructor(props) {
        super(props);
    };

    @autobind
    handleCreate(value) {
        this.props.dispatch(Actions.add(value));
    }

    @autobind
    handleComplete(id) {
        this.props.dispatch(Actions.done(id));
    }

    @autobind
    handleReopen(id) {
        this.props.dispatch(Actions.reopen(id));
    }

    @autobind
    handleChangeFilter(filter) {
        this.props.dispatch(Actions.filter(filter));
    }

    render() {
        let todos = this.props.todoApp.todos;
        if (this.props.todoApp.filter === 'todo') {
            todos = this.props.todoApp.todos.filter(it => !it.done)
        }

        return (
            <div style={{width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
                <NewTodo onCreate={this.handleCreate}/>
                <List todos={todos}
                      onComplete={this.handleComplete}
                      onReopen={this.handleReopen}/>
                <Footer filter={this.props.todoApp.filter} onChangeFilter={this.handleChangeFilter}/>
            </div>
        )
    }

}