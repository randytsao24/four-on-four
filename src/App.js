import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Button, Icon } from 'antd';
import Sequencer from './components/Sequencer';
import './App.css';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class App extends Component {
  render() {
    return (
      <Layout className='layout'>
      
        {/* Header */}
        <Header className='app-header'>
          <div className="app-title">Four on Four</div>
          <Menu
            className='header-menu'
            mode="horizontal"
            defaultSelectedKeys={['1']}
          >
            <Menu.Item key="1">Sequencer</Menu.Item>
            <Menu.Item key="2">About</Menu.Item>
            <Menu.Item key="3">Login</Menu.Item>
            <Menu.Item key="4">Sign Up</Menu.Item>
          </Menu>
        </Header>

        {/* Sidebar */}
        <Layout>
          <Sider className='app-sidebar'>
          <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
                <Menu.Item key="1">option1</Menu.Item>
                <Menu.Item key="2">option2</Menu.Item>
                <Menu.Item key="3">option3</Menu.Item>
                <Menu.Item key="4">option4</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>

          {/* Sequencer */}
          <Layout className='sequencer-container'>
            <Sequencer />
          </Layout>
        </Layout>

        {/* Footer */}
        <Footer className='app-footer'>
          Made with pure hatred by Randy Tsao
        </Footer>
      </Layout>
    );
  }
}

export default App;
