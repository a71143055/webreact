import React from "react";
import Comment from "./Comment"

const comments = [
    {
        name: "정구영",
        comment: "컴포넌트 합성 실습 중.",
    },
    {
        name: "김민지",
        comment: "리액트 재미있어요~!",
    },
    {
        name: "조현욱",
        comment: "저도 리액트 배워 보고 싶어요!!",
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;