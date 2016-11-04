export const ADD_TYPE = 'ADD_TYPE';

export function add(content) {
    // return {
    //     type: ADD_TYPE,
    //     content
    // }

    return dispatch => dispatch({
        type: ADD_TYPE,
        content
    });
}


export const DONE_TYPE = 'DONE_TYPE';

export function done(id) {
    // return {
    //     type: DONE_TYPE,
    //     id
    // }

    return dispatch => dispatch({
        type: DONE_TYPE,
        id
    });
}


export const REOPEN_TYPE = 'REOPEN_TYPE';

export function reopen(id) {
    // return {
    //     type: REOPEN_TYPE,
    //     id
    // }

    return dispatch => dispatch({
        type: REOPEN_TYPE,
        id
    })
}


export const FILTER_TYPE = 'FILTER_TYPE';

export function filter(filter) {
    // return {
    //     type: FILTER_TYPE,
    //     filter
    // }


    return dispatch => dispatch({
        type: FILTER_TYPE,
        filter
    })
}