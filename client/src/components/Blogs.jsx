import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PostCard from './PostCard'
import axios from 'axios';

const Blogs = () => {

  const [blogs,setBlogs] = useState([]);
  const [error,setError] = useState(false);

  useEffect(()=>{
    const fetchBlogs = async () => {
       try{
        const response = await axios.get('/blogs/random');
        setBlogs(response.data);
       }catch(err){
          setError(true);
       }
    }
    fetchBlogs();
  },[]);

  return (
    <Container>
    <CardContainer>
        {
           blogs.map((blog)=>(
              <PostCard key={blog._id} blog={blog}/>
           ))
        }
    </CardContainer>
    <ShowMoreBtn>Show More</ShowMoreBtn>
    </Container>
  )
}

export default Blogs




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


const ShowMoreBtn = styled.button`
width: max-content;
align-self: center;
padding: 0.8rem 4rem;
background: linear-gradient(90deg, #0ea5ea, #0bd1d1 51%, #0ea5ea);
background-size: 200%;
background-position: left;
font-weight:400;
color: white;
font-size: 0.8rem;
border-radius:3rem;
border: none;
cursor: pointer;
transition: all 0.3s ease;

&:hover{
  background-position: right;
};
`
