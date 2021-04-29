import {FETCH_TODOS_FAILURE, FETCH_TODOS_REQUEST, FETCH_TODOS_SUCCESS} from "./todoTypes";
import {fetchTodosList} from '../../services/todosService';

export const fetchTodosRequest = () => {
    return {
        type: FETCH_TODOS_REQUEST
    }
}

const fetchTodosSuccess = (todos: any) => {
    return {
        type: FETCH_TODOS_SUCCESS,
        payload: todos
    }
}

const fetchTodosFailure = (error: any) => {
    return {
        type: FETCH_TODOS_FAILURE,
        payload: error
    }
}

export const fetchTodos = () => {
    return (dispatch: any) => {
        dispatch(fetchTodosRequest)
        fetchTodosList
            .then(response => {
                const todos = response.data;
                dispatch(fetchTodosSuccess(todos))
            })
            .catch(error => {
                const errorMsg = error.message;
                dispatch(fetchTodosFailure(errorMsg))
            })
    }
}
