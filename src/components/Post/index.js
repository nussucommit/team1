import styles from "./Post.module.css";

const Post = ({ content }) => {
    return (
      <div className={styles.box}>
        <h1> {content.postTitle} </h1>
        <p> {content.postContent}</p>
        <br/>

        <div className={styles.moreInfo}>
          <p> Author: {content.postAuthor}  Date: {content.postDate}  Likes: {content.postLikes}  Comments: {content.postCommentsNum} </p>
        </div>
      </div>
    );
  };
 
export default Post;