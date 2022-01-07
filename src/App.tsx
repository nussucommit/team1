import React, { useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import PostList from "./components/PostList";
import logo from './logo.svg';
import './App.css';


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
    postTitle: "Title0",
    postAuthor: "Poster0",
    postLikes: "0",
    postCommentsNum: "0",
    postContent: "Lorem Ipsum",
    postDate: "25/12/21"
  },
  {
    postID: 1,
    postTitle: "Title1",
    postAuthor: "Poster1",
    postLikes: 0,
    postCommentsNum: 0,
    postContent: "Lorem Ipsum 1",
    postDate: "26/12/21"
  },
  {
    postID: 2,
    postTitle: "Title2",
    postAuthor: "Poster2",
    postLikes: 100,
    postCommentsNum: 20,
    postContent: "Lorem Ipsum 2",
    postDate: "27/12/21"
  },
  {
    postID: 3,
    postTitle: "Title3",
    postAuthor: "Poster3",
    postLikes: 10,
    postCommentsNum: 50,
    postContent: "Lorem Ipsum 3",
    postDate: "28/12/21"
  },
  {
    postID: 4,
    postTitle: "Title4",
    postAuthor: "Poster4",
    postLikes: 50,
    postCommentsNum: 20,
    postContent: "Lorem Ipsum 4",
    postDate: "29/12/21"
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
      <div className="postlist"> <PostList posts={posts} /> </div>
    </div>
  );

}

export default App;
