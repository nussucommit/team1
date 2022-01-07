import React, { useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import PostList from "./components/PostList";


  // import './App.css';
  // import './Post/post.css'

  // import './index.css';
  // import 'antd/dist/antd.css';
  // import { Layout, Menu } from 'antd';
  // import PostList from './PostList'
  // const { Header, Content, Footer } = Layout;

// Mock Data for Frontend Testing
const POSTS = [
  {
    postID: 0,
    postTitle: "Test0",
    postAuthor: "Poster0",
    postLikes: "0",
    postCommentsNum: "0",
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
  {
    postID: 2,
    postTitle: "Title 2",
    postAuthor: "Poster2",
    postLikes: 100,
    postCommentsNum: 20,
    postContent: "Lorem Ipsum 2",
    postDate: "27/12/21"
  },
]
// End of Mock Data


function App() {
  const [loginModalShow, setLoginModalShow] = React.useState(false);
  const [signupModalShow, setSignupModalShow] = React.useState(false);

  console.log("App loaded.")
  const [posts, setPosts] = useState(POSTS);
  return (
    <div className="App">
      <Navbar loginModalShow={loginModalShow} signupModalShow={signupModalShow} setLoginModalShow={setLoginModalShow} setSignupModalShow={setSignupModalShow}/> 
      <PostList posts={posts} />
    </div>
  );

}

export default App;
