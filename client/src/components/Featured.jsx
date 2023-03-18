import React, { useEffect, useState } from 'react'
import PostCard from './PostCard'
import styled from 'styled-components'
import axios from 'axios';


const Featured = () => {

  const [blogs,setBlogs] = useState([]);
  const [error,setError] = useState(false);

  useEffect(()=>{
    const fetchBlogs = async () => {
       try{
        const response = await axios.get('/blogs/trending');
        setBlogs(response.data);
       }catch(err){
          setError(true);
       }
    }
    fetchBlogs();
  },[]);

  return (
    <Container>
        <Heading>Featured</Heading>
    <CardContainer>
    {
      blogs.map((blog)=>(
        <PostCard key={blog._id} blog={blog}/>
      ))
    }
    </CardContainer>
    </Container>
  )
}

export default Featured

/*<------------------------------------------------------  CSS STYLING --------------------------------------------------------------------->*/

const Container = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
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
