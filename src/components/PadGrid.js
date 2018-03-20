import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';
import PadRow from './PadRow';

import '../App.css';

class PadGrid extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='pad-row-container'>
        <div>{this.props.num}</div>
        <PadRow />
        <PadRow />
        <PadRow />
        <PadRow />
      </div>
    );
  }
}

export default PadGrid;