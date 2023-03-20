import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Popup from './Popup';
import RecentCard from './RecentCard';


const Recent = () => {

  const [blogs,setBlogs] = useState([]);
  const [error,setError] = useState(false);
  const [msg,setMsg] = useState("");

  useEffect(()=>{
    const fetchBlogs = async () => {
       try{
        const response = await axios.get('/blogs/recent');
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
          <Heading>Recent Blogs</Heading>
          <RecentBlogContainer>
          {
            blogs.map((blog)=>(
               <RecentCard key={blog._id} blog={blog}/>
            ))
          }
          </RecentBlogContainer>
      </Container>
    </>
  )
}

export default Recent

/*<------------------------------------------------------  CSS STYLING --------------------------------------------------------------------->*/


const Container = styled.div`
padding: 1rem;
`;

const Heading = styled.p`
font-size: 2rem;
color:#0ea5ea;
font-weight: bold;
text-align: center;
margin-bottom: 2rem;
`;

const RecentBlogContainer = styled.div`
display:grid;
grid-template-columns: 1fr;
gap: 2rem;

@media(max-width:768px){
  gap: 3rem;
}

`;