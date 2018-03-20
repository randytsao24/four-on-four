import React, { Component } from 'react';
import { Layout } from 'antd';
import PadGrid from './PadGrid';
import '../App.css';

const { Content } = Layout;

class Sequencer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Content className='sequencer-content'>
        <PadGrid key={1} id='pad-one' num='1' />
        <PadGrid key={2} id='pad-two' num='2' />
        <PadGrid key={3} id='pad-three' num='3' />
        <PadGrid key={4} id='pad-four' num='4' />
      </Content>
    );
  }
}

export default Sequencer;