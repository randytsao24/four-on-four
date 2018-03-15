import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Button } from 'antd';
import './App.css';

const { Header, Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <Layout className="layout">
        <Header className='app-header'>
          <div className="app-title">Four on Four</div>
          <Menu
            className='header-menu'
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">Sequencer</Menu.Item>
            <Menu.Item key="2">Login</Menu.Item>
            <Menu.Item key="3">Sign Up</Menu.Item>
          </Menu>
        </Header>
      </Layout>
    );
  }
}

export default App;
