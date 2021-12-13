const Post = ({ postID, postTitle, postAuthor, postLikes, postCommentsNum, postContent, postDate}) => {
    return (
      <div>
        <h1> TestPost {postTitle}, {postAuthor}, {postLikes}, {postCommentsNum}, {postContent}, {postDate} </h1>
      </div>
    );
  };

export default Post;