import styles from "./Todo.module.css";

const Comment = ({ commentID, commentAuthor, commentLikes, commentContent, commentDate }) => {
  return (
    <div className={styles.comment}>
      <p>Test Comment. {commentID}, {commentAuthor}, {commentLikes}, {commentContent}, {commentDate} </p>
    </div>
  );
};

export default Comment;