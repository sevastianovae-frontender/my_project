import React, { useContext } from "react";
import { Button, Card, Avatar, Row, Col, Tag, Timeline } from 'antd';
import { UserOutlined, HeartTwoTone } from '@ant-design/icons';
//import {ReactComponent as Save} from './img/save.svg';
import cn from 'classnames';
import { AppContext } from "./../../context/appContext";


export const Post = ({ item, onProductLike, currentUser,productDelete }) => {
    //const isLiked=true;
    const _id = item._id; const likes = item.likes;
    const isLiked = item.likes.some(id => id == currentUser._id);
    const { handleProductLike, isLoading } = useContext(AppContext);

    function handleLikeClick() {
        onProductLike({ _id, likes })
    }
      
    function deleteClick() {let tr=confirm("Точно?");
       if(tr){productDelete({ _id})}
    }
    return (

        <Card title={item.author.name} >
            <Row style={{ marginBottom: "10px" }}>
                <Col><Avatar size={38} icon={<UserOutlined />} /></Col>
                <Col offset={1}><p style={{ marginTop: "8px" }}>{item.author.email}</p></Col>                    
            </Row>
            <Row><p>{item.name}</p> </Row>
            <Row><p>Tags: </p> <Tag color="processing" style={{ height: "24px", marginLeft: "5px" }}>{item.tags}</Tag></Row>
            <Row><Timeline>
                <Timeline.Item>{item.created_at}</Timeline.Item>
                <Timeline.Item color="green">{item.updated_at}</Timeline.Item>
            </Timeline>
            </Row>
            <Row>
            <Col>
                    <Button style={{ borderColor: 'CornflowerBlue' }} onClick={handleLikeClick}>
                        <HeartTwoTone style={{ fontSize: '20px', marginRight:'3px' }} twoToneColor={cn({ "grey": !isLiked }, { "red": isLiked })} />
                    {item.likes.length}
                    </Button>
                    </Col>
            <Col offset={4}>
            <Button style={{ borderColor: 'CornflowerBlue' }} onClick={deleteClick}>Удалить пост</Button>
            </Col>
            </Row>
        </Card>

    );
}

