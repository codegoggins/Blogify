import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import axios from 'axios';
import PostCard from '../components/PostCard'
import Popup from '../components/Popup';
import {useSelector} from 'react-redux'

const Trending = () => {
    const [blogs,setBlogs] = useState([]);
    const [error,setError] = useState(false);
    const [msg,setMsg] = useState("");

    const {currentUser} = useSelector((state)=>state.user);
  
    useEffect(()=>{
      const fetchBlogs = async () => {
         try{
          const response = await axios.get('/blogs/trending');
          setBlogs(response.data);
         }catch(err){
            setError(true);
            setMsg("Oops !! Something Went Wrong");
         }
      }
      fetchBlogs();
    },[]);
  
    return (
       <>
       {
         error && <Popup msg={msg} setError={setError}/>
       }
      <Container> 
          <Heading>Trending</Heading>
      <CardContainer>
      {
        blogs.map((blog)=>(
          <PostCard key={blog._id} blog={blog}/>
        ))
      }
      </CardContainer>
      </Container>
       </> 
    )
}

export default Trending

/*<------------------------------------------------------  CSS STYLING --------------------------------------------------------------------->*/

const Container = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
margin-top:8rem;
`;

const CardContainer = styled.div`
display: grid;
padding: 1rem;
grid-template-columns:repeat(3,1fr);
gap: 1.5rem;

@media(max-width:768px){
  grid-template-columns:100%;
}

`;

const Heading = styled.p`
font-size: 2rem;
color:#0ea5ea;
font-weight: bold;
text-align: center;
`;
