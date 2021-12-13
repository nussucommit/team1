import Comment from "../Comment";

const CommentList = ({ comments }) => {
  return (
    <div>
      {comments.map((comments, index) => (
        <Comment
          key={index}
          content={comment}
        />
      ))}
    </div>
  );
};

export default CommentList;

//   likeHandler={likeHandler}