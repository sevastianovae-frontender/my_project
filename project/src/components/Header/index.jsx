import React from "react";
import { Button, Row, Col, Image } from 'antd';



const Menu = () => {
  return (
    <Row >
      <Col offset={4}>
        <Image
          width={110}
          height={20}
          preview={false}
          src="https://seeklogo.com/images/R/remix-logo-74C1F4148A-seeklogo.com.png"
        />
      </Col>
      <Col offset={10} >
        <Button type="link" style={{ color: 'navy' }}> Home </Button>
        <Button type="link" style={{ color: 'blue' }}> Remix Docs </Button>
        <Button type="link" style={{ color: 'royalblue' }}> GitHub </Button>
      </Col>
    </Row>
  );
};

export default Menu;