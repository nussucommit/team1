import styles from "./Post.module.css";

const Post = ({ postID, postTitle, postAuthor, postLikes, postCommentsNum, postContent, postDate}) => {
    return (
      <div className={styles.box}>
        <h1> Title: {postTitle} </h1>
        <p> Content: {postContent}</p>
        <br/>

        <div className={styles.moreInfo}>
          <p> Author: {postAuthor} Date: {postDate} </p>
          <p align="right"> Likes: {postLikes} Comments: {postCommentsNum} </p>
        </div>
      </div>
    );
  };

export default Post;