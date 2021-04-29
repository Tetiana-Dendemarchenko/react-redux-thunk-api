import React from 'react';

interface IComment {
    id: number,
    name: string,
    body: string
}

interface ICommentData {
    commentData: {
        comments: Array<IComment>
    }
}

const Comments = ({commentData}: ICommentData) => {
    return (
        <div>
            <h2>Comments list</h2>
            <div>
                {
                    commentData && commentData.comments && commentData.comments.map((comment: IComment) => {
                        return <p key={comment.id}>{comment.name} commented: "{comment.body}"</p>;
                    })
                }
            </div>
        </div>
    );
};

export default Comments;
