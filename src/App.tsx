import './App.css';
import './Post/post.css'

import './index.css';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import PostList from './PostList'
const { Header, Content, Footer } = Layout;


function App() {
  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%', flexFlow: 'nowrap', display: "flex" }}>
        <div className="logo"> PostIT </div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
          <PostList></PostList>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Designed by Team 1</Footer>
    </Layout>

  )
}

export default App;
