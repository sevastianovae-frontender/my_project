import React,{ useState, useEffect,useContext} from "react";
import { List } from 'antd';
//import { postData } from "../../posts.js";
import api from "../../utils/Api";
import { Post } from '../Post';
import useDebounce from '../hooks/useDebounce';
import { SearchInfo } from '../SearchInfo';

export const PostList = ({updateLike}) => {
  
  const [searchQuery, setSearchQuery] = useState("");
  const [cards, setCards] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [currentUser, setCurrentUser] = useState({})
  const delaySearchQuery = useDebounce(searchQuery, 200)
  //const {isLoading} = useContext(AppContext)
const isLoading=true;
  // useEffect(() => {
  //   // console.log('useEffect#1')
  //   handleRequest();
  // }, [delaySearchQuery]);

  useEffect(()=> {
    Promise.all([api.getProductsList(), api.getUserInfo()])
      .then(([productData, userData])=> {
        setCards(productData);
        setCurrentUser(userData)
        
        const filteredData = productData.filter((item) =>
          item.likes.some(id => id === userData._id)
        )
        setFavorites(filteredData);
      });
  },[])
  
  function handleProductLike({_id, likes}) {
    const isLiked = likes.some(id=> id === currentUser._id)
    //const isLiked =true;
    api.changeLikeStatus(_id, isLiked)
      .then((newCard)=> {
        const newCardsState = cards.map(c => { 
          console.log('Карточка с сервера', newCard);
          console.log('Карточка из стейта в пререборе', c);
          return c._id === newCard._id ? newCard : c 
        })
        
       if(!isLiked){
        setFavorites(prevState => [...prevState, newCard ])
      } else {
        setFavorites(prevState => {
          return prevState.filter(card => card._id !== newCard._id)
        })
      }
       setCards(newCardsState);
        
      })
      
    }
  updateLike({favorites});  
  
  function handleProductDelete({_id}) {
      api.deleteProducts(_id)
      .then((newCard)=> {
        const newCardsState = cards.map(c => { 
          
          return c._id === newCard._id ? newCard : c 
        })
              
       setCards(newCardsState);
        
      });
      
    }
    console.log(cards)
  return (
       
    <>
       
    <SearchInfo searchText={searchQuery} searchCount={cards.length}/>
    <List
    grid={{ gutter: 16, column: 3 }}
    dataSource={cards}
      pagination={{ pageSize: 9, }}
      style={{ marginBottom: '30px' }}
      renderItem={item => (
        <List.Item>
          <Post item={item} onProductLike={handleProductLike} currentUser={currentUser} productDelete={handleProductDelete}/>

        </List.Item>
      )}
    />
    
   </>
 
  );



}

