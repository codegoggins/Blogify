import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import Popup from './Popup';



const RecentCard = ({blog}) => {

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
        <PostImg>
        <img src={blog?.blogImg} alt="" />
        </PostImg>
        <PostContent>
             <PostTitle>{blog?.title}</PostTitle>
             <PostDesc>{blog?.desc}</PostDesc>
             <Tags>
                {
                  blog?.tags.map((tag)=>(
                  <Tag key={tag}>{tag}</Tag>
                  ))
                }
             </Tags>
             <PostDetails>
                <PostDate>{formattedDate}</PostDate>
                <Author>
                    <AuthorImg src={author?.profileImg}/>
                    <AuthorName>{author?.name}</AuthorName>
                </Author>
             </PostDetails>
        </PostContent>
    </Container>
      </>
    </Link>
  )
}

export default RecentCard





/*<------------------------------------------------------  CSS STYLING --------------------------------------------------------------------->*/


const Container = styled.div`
display: flex;
gap: 1rem;
align-items: center;
margin: 0 auto;
height:auto;


@media(max-width:768px){
  padding: 1rem;
  border-radius: 2rem;
  border: 1px solid #0ea5ea;
  flex-direction: column;
}

`;

const PostImg = styled.div`
flex: 2;
height: 12rem;

img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1.5rem;
}
`

const PostContent = styled.div`
flex: 6;
display: flex;
flex-direction: column;
gap: 0.7rem;
`;

const PostTitle = styled.p`
font-size: 1.7rem;
color: white;
font-weight:bold;
cursor: pointer;
transition: all 0.3s ease;
&:hover{
color:#0ea5ea;
}
`;

const PostDesc = styled.p`
font-size: 0.85rem;
`;

const Tags = styled.div`
display: flex;
align-items: center;
gap: 0.5rem;
`;

const Tag = styled.p`
font-size: 0.65rem;
color: white;
background-color:#0ea5ea;
padding: 0.2rem 0.4rem;
border-radius: 0.8rem;
cursor: pointer;
`;

const PostDetails = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`

const Author = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 0.5rem;
`
const AuthorImg = styled.img`
height: 2rem;
width: 2rem;
object-fit: cover;
border-radius: 50%;
border:2.5px solid #0ea5ea;
`
const AuthorName = styled.p`
font-size: 0.7rem;
`
const PostDate = styled.p`
font-size: 0.7rem;
`

