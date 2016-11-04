import {combineReducers} from 'redux';
import * as Actions from './actions';


const initialState = {
    nextId: 0,
    todos: [],
    filter: 'todo'
};


function todoApp(state = initialState, action) {
    let todos = [];
    switch (action.type) {
        case Actions.ADD_TYPE:
            const todo = {id: state.nextId, content: action.content, done: false};
            return Object.assign({}, state, {nextId: state.nextId + 1, todos: [...state.todos, todo]});

        case Actions.DONE_TYPE:
            todos = state.todos;
            todos.find((it => it.id == action.id)).done = true;
            return Object.assign({}, state, {todos});

        case Actions.REOPEN_TYPE:
            todos = state.todos;
            todos.find((it => it.id == action.id)).done = false;
            return Object.assign({}, state, {todos});

        case Actions.FILTER_TYPE:
            return Object.assign({}, state, {filter: action.filter});

        default:
            return state;
    }
}

const rootReducer = combineReducers({
    todoApp
});


export default rootReducer;