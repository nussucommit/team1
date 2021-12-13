import React, { useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import PostList from "./components/PostList";

// Mock Data for Frontend Testing
const POSTS = [
  {
    postID: 0,
    postTitle: "Test0",
    postAuthor: "Poster0",
    postLikes: 0,
    postCommentsNum: 0,
    postContent: "Lorem Ipsum",
    postDate: "25/12/21"
  },
  {
    postID: 1,
    postTitle: "Test1",
    postAuthor: "Poster1",
    postLikes: 0,
    postCommentsNum: 0,
    postContent: "Lorem Ipsum 1",
    postDate: "26/12/21"
  },
]
// End of Mock Data



function App() {
  console.log("App loaded.")
  const [posts, setPosts] = useState(POSTS);
  return (
    <div className="App">
      <Navbar />
      <PostList posts={posts} />
    </div>
  );
}

export default App;
