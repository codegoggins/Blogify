import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from '../firebase';
import Popup from '../components/Popup';


const Write = () => {

  const [title,setTitle] = useState("");
  const [desc,setDesc] = useState("");
  const [tags,setTags] = useState([]);
  const [blogImg,setBlogImg] = useState("");
  const [perc,setPerc] = useState(0);
  const [error,setError] = useState(false);
  const [msg,setMsg] = useState("");
  const navigate = useNavigate();


// <------------------------------------------------------------ IMAGE UPLOAD FUNCTION ----------------------------------------------------------------------->

  const handleImageUpload = (file) => {
      
    const storage = getStorage();
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage,fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed',
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setPerc(Math.round(progress));
    }, 
    (error) => {},
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        setBlogImg(downloadURL);
      });
    }
);
}

// <------------------------------------------------------------ CREAT BLOG FUNCTION ----------------------------------------------------------------------->
const handleCreateBlog = async (e) => {
  e.preventDefault();

// <---------------------------------- ERROR HANDLING -------------------------------------------->
  if(title === ""){
    setError(true);
    setMsg("Title Cannot Be Empty");
    return;
  }
  if(desc === ""){
    setError(true);
    setMsg("Description Cannot Be Empty");
    return;
  }
  if(desc.length < 300){
    setError(true);
    setMsg("Description Cannot Be Less Than 300 Characters");
    return;
  }
  if(!blogImg){
    setError(true);
    setMsg("Please Upload An Image");
    return;
  }

// <---------------------------------- ERROR HANDLING -------------------------------------------->
  
  try{
    const res = await axios.post('/blogs',{
      title,
      desc,
      blogImg,
      tags
    });
    res.status === 200 && navigate(`/blog/${res.data._id}`);
  }catch(err){
     setError(true);
  }
}
 

  return (
    <>
    {error && <Popup setError={setError} msg={msg}/>}
    <Container>
       <Title>Create New Post</Title>
       {
          blogImg && <Image src={blogImg}/>
       }
       <Form>
       <Label htmlFor='createFile'>
          <AddAPhotoIcon/>
          <p>Upload an Image</p>
          {
            perc > 0 && <p>{perc}%</p> 
          }
       </Label>

       <Input 
       type='file' 
       id='createFile' 
       style={{display:"none"}}
       accept="image/*"
       onChange={(e)=>handleImageUpload(e.target.files[0])} 
       />

       <Input 
       type='text' 
       placeholder='title'
       onChange={(e)=>setTitle(e.target.value)} 
       />
       <Desc 
       placeholder="what's on your mind"
       onChange={(e)=>setDesc(e.target.value)} 
       />

       <Input 
       type='text' 
       placeholder='Separate tags using commas'
       onChange={(e)=>setTags(e.target.value.split(','))} 
       />

       <CreateBtn onClick={handleCreateBlog}>Create</CreateBtn>
       </Form>
    </Container>
    </>
  )
}

export default Write  



/*<------------------------------------------------------  CSS STYLING --------------------------------------------------------------------->*/


const Container = styled.div`
padding: 6rem 5rem;
color: #0ea5ea;

@media(max-width:768px){
margin-top: 5rem;
padding:1rem;
}

`;
const Input = styled.input`
padding: 1rem;
background: transparent;
border: none;
color:white;
font-size: 1rem;
border: 1px solid #0ea5ea;
border-radius: 0.5rem;
&:focus{
  outline: none;
}
&::placeholder{
  letter-spacing: 0.04rem;
  color: white;
}
`;
const Image = styled.img`
margin-top: 2rem;
object-fit: cover;
width:100%;
border-radius: 0.5rem;
`;
const Title = styled.h1``;

const CreateBtn = styled.button`
padding: 0.8rem 2rem;
display: block;
width:100%;
background: linear-gradient(90deg, #0ea5ea, #0bd1d1 51%, #0ea5ea);
background-size: 200%;
background-position: left;
font-weight:400;
color: white;
font-size: 0.8rem;
border-radius: 0.5rem;
border: none;
cursor: pointer;
transition: all 0.3s ease;
&:hover{
  background-position: right;
}
`;
const Label = styled.label`
display: flex;
align-items: center;
padding: 1rem;
gap: 1rem;
width: max-content;
`;
const Form = styled.form`
display:flex;
flex-direction:column;
padding: 1rem;
gap: 1rem;
margin-top: 1rem;
`;

const Desc = styled.textarea`
resize: none;
height: 10rem;
background: transparent;
border: none;
padding: 1rem;
color:white;
font-size: 1rem;
letter-spacing: 0.001rem;
border: 1px solid #0ea5ea;
border-radius: 0.5rem;
&:focus{
  outline: none;
}
&::placeholder{
  color: white;
}
`;


