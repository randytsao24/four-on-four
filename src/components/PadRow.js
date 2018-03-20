import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';
import '../App.css';

class PadRow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Row type="flex" justify="space-around">
          <Col span={4}>
            <Button className='pad-button'></Button>
          </Col>
          <Col span={4}>
            <Button className='pad-button'></Button>
          </Col>
          <Col span={4}>
            <Button className='pad-button'></Button>
          </Col>
          <Col span={4}>
            <Button className='pad-button'></Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default PadRow;