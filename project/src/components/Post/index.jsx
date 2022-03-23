import React from "react";
import { Card, Avatar, Row, Col, Tag, Timeline } from 'antd';
import { UserOutlined } from '@ant-design/icons';



export const Post = ({item}) => {
    return (

<Card title={item.title} >
    <Row style={{ marginBottom: "10px" }}>
        <Col><Avatar size={38} icon={<UserOutlined />} /></Col>
        <Col offset={1}><p style={{ marginTop: "8px" }}>{item.author.email}</p></Col></Row>
    <Row><p>{item.text}</p> </Row>
        <Row><p>Tags: </p> <Tag color="processing" style={{ height: "24px", marginLeft: "5px" }}>{item.tags}</Tag></Row>
    <Row><Timeline>
        <Timeline.Item>{item.created_at}</Timeline.Item>
        <Timeline.Item color="green">{item.updated_at}</Timeline.Item>
    </Timeline>
    </Row>
</Card>

    );
}

