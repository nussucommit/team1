import Post from "../Post";

const PostList = ({ posts }) => {
  return (
    <div>
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