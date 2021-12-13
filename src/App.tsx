import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Post from "./components/Post";


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

const [posts, setPosts] = useState(POSTS);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>PostIT</p>
      </header>
      <Post postID={0} postTitle={"Test0"} postAuthor={"testAuthor0"} postLikes={"0"} postCommentsNum={"01"} postContent={"Lorem Ipsum"} postDate={"25/12/21"} />
    </div>
  );
}

export default App;
