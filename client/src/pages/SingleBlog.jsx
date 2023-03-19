import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios'
import Popup from '../components/Popup';
import { useSelector } from 'react-redux';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';


const SingleBlog = () => {

  // CURRENT BLOG ID
  const path = useLocation().pathname.split('/')[2];

  const [blog,setBlog] = useState({});
  const [error,setError] = useState(false);
  const [author,setAuthor] = useState({});
  const [msg,setMsg] = useState("");

  const navigate = useNavigate();


  const {currentUser} = useSelector((state)=> state.user);

  useEffect(()=>{
      const fetchBlogData = async () => {
          try{
            const blogRes = await axios.get(`/blogs/find/${path}`);
            const authorRes = await axios.get(`/users/${blogRes.data.userId}`)
            setBlog(blogRes.data);
            setAuthor(authorRes.data);
          }catch(err){
              setError(true);
              setMsg("Oops !! Something Went Wrong");
          }
      }
      fetchBlogData();
  },[path]);

  //FORMAT DATE FOR BLOG
  const formattedDate = new Date(blog?.createdAt).toLocaleString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
        }
    );

  //DELETE BLOG
  const handleDeleteBlog = async () => {
     try{
      await axios.delete(`/blogs/${blog?._id}`);
      navigate('/');
     }catch(err){
      setError(true);
      setMsg("Oops !! Something Went Wrong");
     }
  }

  // UPDATE BLOG
  const handleUpdateBlog = async () => {
     try{

     }catch(err){

     }
  }

     
  return (
    <>
    {
      error && <Popup msg={msg} setError={error}/>
    }
    <Container>
      
        <Image src={blog?.blogImg}/>
        <Details>
            <User>{author?.name}</User>
            <Time>{formattedDate}</Time>
        </Details>
        <LikeDislike>
            <LikeBtn>
                <ThumbUpOutlinedIcon/>
            </LikeBtn>
            <DislikeBtn>
                <ThumbDownAltOutlinedIcon/>
            </DislikeBtn>
        </LikeDislike>
        {
           currentUser?._id === blog?.userId && (
          <UpdateAndDelete>
            {/* <Edit onClick={handleUpdateBlog}>
              <CreateIcon/>
            </Edit> */}
            <DeleteBlog onClick={handleDeleteBlog}>
              <DeleteIcon/>
            </DeleteBlog>
          </UpdateAndDelete>
           )
        }
        <Title>{blog?.title}</Title>
        <Desc>{blog?.desc}</Desc>
    </Container>
    </>
  )
}

export default SingleBlog



{/* <------------------------------------------------------ SIDE MENU ---------------------------------------------------------------------> */}


const Container = styled.div`
display: flex;
flex-direction: column;
gap: 2rem;
padding: 6rem 2rem;
`;
const Title = styled.h1`
color: #0ea5ea;
`;
const Desc = styled.p`
color: white;
`;
const Image = styled.img`
border-radius: 1rem;
height:25rem;
object-fit:contain;
`;

const Details = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
const User = styled.span``;

const Time = styled.span``;

const UpdateAndDelete = styled.div`
display: flex;
gap: 1rem;
width: max-content;
`;
const Edit = styled.div`
background-color:#0ea5ea;
color: white;
padding: 0.3rem;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
`;

const DeleteBlog = styled(Edit)``;

const LikeDislike = styled.div`
display: flex;
gap: 1.5rem;
align-items: center;
`;

const LikeBtn = styled.p`
color: white;
background-color: #0ea5ea;
padding: 0.3rem;
height:2.5rem;
width:2.5rem;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
`;

const DislikeBtn = styled(LikeBtn)``;