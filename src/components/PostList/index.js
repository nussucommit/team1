import Post from "../Post";

const PostList = ({ posts }) => {
  console.log(posts)
  return (
    <div className="postlist">
      {posts.map((post, index) => (
        <Post
          key={index}
          content={post}
        />
      ))}
    </div>
  );
};

export default PostList

//   clickHandler={clickHandler}
//   likeHandler={likeHandler}