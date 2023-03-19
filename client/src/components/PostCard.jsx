import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import Popup from './Popup';

const PostCard = ({blog}) => {

  const [author,setAuthor] = useState(null);
  const [error,setError] = useState(false);
  const [msg,setMsg] = useState("");

  // FETCH BLOG FOR BLOG
  useEffect(()=>{
    if(blog){
      const fetchAuthor = async () => {
        try {
          const response = await axios.get(`/users/${blog?.userId}`);
          setAuthor(response.data);
        } catch (error) {
          setError(true);
          setMsg("Oops !! Something Went Wrong");
        }
      };
  
      fetchAuthor();
    }
  },[blog]);

  //FORMAT DATE FOR BLOG
  const formattedDate = new Date(blog?.createdAt).toLocaleString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
      }
  );


  return (
    <Link to={`/blog/${blog?._id}`}>
    <>
      {
        error && <Popup msg={msg} setError={error}/>
      }
    <Container>
        <CardImg src={blog?.blogImg}/>
        <Tags>
          {
            blog?.tags.map((tag)=>(
            <Tag key={tag}>{tag}</Tag>
            ))
          }
        </Tags>
        <CardTitle>{blog?.title}</CardTitle>
        <CardDetail>
            <Author>{author?.name}</Author>
            <PostTime>{formattedDate}</PostTime>
        </CardDetail>
    </Container>
    </>
    </Link>
  )
}

export default PostCard




/*<------------------------------------------------------  CSS STYLING --------------------------------------------------------------------->*/


const Container = styled.div`
background-color:#131b30;
border: 1px solid #223044;
padding: 1rem;
width:100%;
height: auto;
display: flex;
flex-direction: column;
justify-content: space-between;
gap: 0.5rem;
border-radius: 1rem;
margin: 0 auto;
`;

const CardImg = styled.img`
object-fit: cover;
height: 12rem;
border-radius: 0.5rem;
`;

const Tags = styled.div`
display: flex;
align-items: center;
gap: 0.5rem;
`;

const Tag = styled.p`
font-size: 0.7rem;
color: white;
background-color:#0ea5ea;
padding: 0.2rem 0.4rem;
border-radius: 0.8rem;
cursor: pointer;
`;

const CardTitle = styled.h1`
font-size: 1.5rem;
color: white;
transition: all 0.3s ease;
cursor: pointer;
&:hover{
color:#0ea5ea;
}
`;

const CardDetail = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
font-size: 0.8rem;
`;

const Author = styled.p``;

const PostTime = styled.p``;