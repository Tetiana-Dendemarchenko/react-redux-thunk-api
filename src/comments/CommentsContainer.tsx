import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchComments} from "../store";
import Comments from "./Comments";

function CommentsContainer({commentData, fetchComments}: any) {
    useEffect(() => {
        fetchComments()
    }, [])

    return (
        <>
            {commentData.loading && <h2>Loading</h2>}
            {commentData.error && <h2>{commentData.error}</h2>}
            {(!commentData.loading && !commentData.error) && <Comments commentData={commentData}/>}
        </>
    );
}

const mapStateToProps = (state: any) => ({
    commentData: state.comment
})

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchComments() {
            return dispatch(fetchComments());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer);
