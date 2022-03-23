import React from "react";
import { Col, Layout, Row } from 'antd';
import PostList from './components/PostList/index';
import Divider from './components/Footer/index';
import Button from './components/Button/index';
import Breadcrumb from './components/Breadcrumb/index';
import Paragraph from './components/Paragraph/index';
import Menu from './components/Header/index';

const { Header, Footer, Content } = Layout;


export const AppAnt = () => {

  return (
    <>
      <Layout>
        <Header style={{
          backgroundColor: 'white',
        }}>
          <Menu />
        </Header>

        <Content>
          <Row align={'middle'} style={{ height: '80px' }}>
            <Col span={16} offset={4}>
              <Breadcrumb />
              <Paragraph />
            </Col>
          </Row>

          <Row style={{ height: '50px' }}>
            <Col span={5} offset={17}>
              <Button />
            </Col>
          </Row>

          <Row>
            <Col span={16} offset={4}>
              <PostList />
            </Col>
          </Row>
        </Content>

        <Footer style={{ backgroundColor: 'white' }}>
          <Row>
            <Col span={16} offset={4}>
              <Divider />
            </Col>
          </Row>
        </Footer>

      </Layout>
    </>
  );
};
