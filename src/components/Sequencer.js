import React, { Component } from 'react';
import { Layout, Button, Grid } from 'antd';
import '../App.css';

const { Content } = Layout;

class Sequencer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Content className='sequencer-content'>
        STUFF GOES HERE
      </Content>
    );
  }
}

export default Sequencer;