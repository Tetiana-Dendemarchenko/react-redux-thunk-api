import {FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS} from "./userTypes";
import {fetchUsersList} from '../../services/usersService';

export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

const fetchUsersSuccess = (users: any) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUsersFailure = (error: any) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

export const fetchUsers = () => {
    return (dispatch: any) => {
        dispatch(fetchUsersRequest)
        fetchUsersList
            .then(response => {
                const users = response.data;
                dispatch(fetchUsersSuccess(users))
            })
            .catch(error => {
                const errorMsg = error.message;
                dispatch(fetchUsersFailure(errorMsg))
            })
    }
}
