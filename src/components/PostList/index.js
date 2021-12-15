import Post from "../Post";

const PostList = ({ posts }) => {https://quaint-iguanodon-3c6.notion.site/React-I-3b207d72c6bd4958a605b643eb6ff138
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