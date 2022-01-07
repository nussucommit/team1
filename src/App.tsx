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
  console.log("App loaded.")
  const [posts, setPosts] = useState(POSTS);
  return (
    <div className="App">
      <Navbar/> 
      <PostList posts={posts} />
    </div>
  );

}

export default App;


//   <Layout>
//     <Header style={{ position: 'fixed', zIndex: 1, width: '100%', flexFlow: 'nowrap', display: "flex" }}>
//       <div className="logo"> PostIT </div>
//       <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
//         <Menu.Item key="1">nav 1</Menu.Item>
//         <Menu.Item key="2">nav 2</Menu.Item>
//         <Menu.Item key="3">nav 3</Menu.Item>
//       </Menu>
//     </Header>
//     <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
//       <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
//         <PostList></PostList>
//       </div>
//     </Content>
//     <Footer style={{ textAlign: 'center' }}>Designed by Team 1</Footer>
//   </Layout>

// );
