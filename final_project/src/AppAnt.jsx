import React,{useState,useEffect} from "react";
import { Col, Layout, Row } from 'antd';
import {PostList} from './components/PostList';
import Divider from './components/Footer/index';
import Button from './components/Button/index';
import Breadcrumb from './components/Breadcrumb/index';
import Paragraph from './components/Paragraph/index';
import {Menu} from './components/Header';
import api from "./utils/Api";
import { AppContext } from './context/appContext';
import { CurrentUserContext } from "./context/currentUserContext";

const { Header, Footer, Content } = Layout;

export const AppAnt = () => {
 const [favorites, setFavorites] = useState([]);
 const [currentUser, setCurrentUser] = useState({});

 useEffect(()=> {
  Promise.all([api.getUserInfo()])
    .then(([userData])=> {
      setCurrentUser(userData)
      
    });
},[])


 function updateLike(value){ setFavorites(value.favorites);}
 
  
  return (
    
     <Layout>
       <AppContext.Provider value={{favorites}}>
       <CurrentUserContext.Provider value={currentUser}>  
        <Header style={{
          backgroundColor: 'white',
        }}>
          <Menu />
          
        </Header>
        </CurrentUserContext.Provider>
        </AppContext.Provider>  
         
        
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
              <PostList updateLike={updateLike}/>
              
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
      
  );
  
};
