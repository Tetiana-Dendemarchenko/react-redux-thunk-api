import {FETCH_COMMENTS_FAILURE, FETCH_COMMENTS_REQUEST, FETCH_COMMENTS_SUCCESS} from "./commentTypes";
import {fetchCommentsList} from '../../services/commentsService';

export const fetchCommentsRequest = () => {
    return {
        type: FETCH_COMMENTS_REQUEST
    }
}

const fetchCommentsSuccess = (comments: any) => {
    return {
        type: FETCH_COMMENTS_SUCCESS,
        payload: comments
    }
}

const fetchCommentsFailure = (error: any) => {
    return {
        type: FETCH_COMMENTS_FAILURE,
        payload: error
    }
}

export const fetchComments = () => {
    return (dispatch: any) => {
        dispatch(fetchCommentsRequest)
        fetchCommentsList
            .then((response: { data: any; }) => {
                const comments = response.data;
                dispatch(fetchCommentsSuccess(comments))
            })
            .catch((error: { message: any; }) => {
                const errorMsg = error.message;
                dispatch(fetchCommentsFailure(errorMsg))
            })
    }
}
