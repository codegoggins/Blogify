import React, { useState } from 'react'
import styled from 'styled-components';
import {Link,useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { signUpFailure, signUpStart, signUpSuccess } from '../redux/userSlice';
import axios from 'axios'
import {ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Popup from '../components/Popup'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { storage } from '../firebase';

const SignUp = () => {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [profileImg,setProfileImg] = useState("");
  const [perc,setPerc] = useState(0);
  const [error,setError] = useState(false);
  const [msg,setMsg] = useState("");


  // <------------------------------------------------------------ IMAGE UPLOAD FUNCTION ----------------------------------------------------------------------->

  const handleImageUpload = (file) => {
      
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage,fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed',
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setPerc(Math.round(progress));
    }, 
    (error) => {
      setError(true);
      setMsg("Cannot Upload Image !! Try Again Later");
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        setProfileImg(downloadURL);
      });
    }
  );
  }

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
      e.preventDefault();

      // <---------------------------------- ERROR HANDLING -------------------------------------------->
  if(name === ""){
    setError(true);
    setMsg("Name Cannot Be Empty");
    return;
  }
  if(email === ""){
    setError(true);
    setMsg("Email Cannot Be Empty");
    return;
  }
  if(password === ""){
    setError(true);
    setMsg("Password Cannot Be Empty");
    return;
  }
  if(!profileImg){
    setError(true);
    setMsg("Please Upload An Image");
    return;
  }
// <---------------------------------- ERROR HANDLING -------------------------------------------->

      dispatch(signUpStart());

      try{
        const res = await axios.post('/auth/signup',{
          name,
          email,
          password,
          profileImg
        });
        dispatch(signUpSuccess(res.data));
        navigate('/login');
      }catch(err){
        setError(true);
        setMsg("Oops !! Something Went Wrong");
        dispatch(signUpFailure());
      }
  }

  return (
    <>

    {error && <Popup setError={setError} msg={msg}/>}
    <Container>
        <Title>Sign Up</Title>
        <Form>
        <Input 
        placeholder='Username' 
        type='text'
        onChange={(e)=>setName(e.target.value)}  
        />

        <Input 
        placeholder='Email' 
        type='text'
        onChange={(e)=>setEmail(e.target.value)}  
        />
        <Input 
        placeholder='Password' 
        type='password'
        onChange={(e)=>setPassword(e.target.value)}  
        />

        {
          profileImg && <Image src={profileImg}/>
        }
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

        <Btn onClick={handleSignUp}>Sign Up</Btn>

        <LogLink>
        <span>
            Already have an account ?
        </span>
        <span>
          <Link to='/login'>
            <em>login</em>
          </Link>
        </span>
        </LogLink>
        </Form>
    </Container>
    </>
  )
}

export default SignUp



/*<------------------------------------------------------  CSS STYLING --------------------------------------------------------------------->*/


const Container = styled.div`
   margin: 5rem auto;
   height: auto;
   width: 20rem;
   border: 1px solid #7d91b0;
   border-radius: 1rem;
   @media(max-width:768px){
     width: 16rem;
   }
`;


const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
gap: 2rem;
padding: 2rem 1rem;
`;
const Input = styled.input`
display: block;
width: 100%;
padding: 1rem 2rem;
border: 1px solid #0ea5ea;
background: transparent;
outline: none;
border-radius: 0.5rem;
color: white;
font-size: 0.8rem;
&::placeholder{
  color: white;
}
`;

const Label = styled.label`
color: #0ea5ea;
display: flex;
align-items: center;
padding: 1rem;
gap: 1rem;
width: max-content;
`;

const Btn = styled.button`
padding: 0.8rem 2rem;
display: block;
width:100%;
background: linear-gradient(90deg, #0ea5ea, #0bd1d1 51%, #0ea5ea);
background-size: 200%;
background-position: left;
font-weight:400;
color: white;
font-size: 0.8rem;
border-radius: 6px;
border: none;
cursor: pointer;
transition: all 0.3s ease;

&:hover{
  background-position: right;
}
`;

const Title = styled.h1`
color: #0ea5ea;
text-align: center;
margin-top: 1rem;
`;

const LogLink = styled.p`
display: flex;
gap: 0.5rem;
@media(max-width:768px){
     flex-direction: column;
     align-items: center;
}
`;

const Image = styled.img`
object-fit: cover;
border-radius: 50%;
height: 2.5rem;
width: 2.5rem;
cursor: pointer;
border:2.5px solid #0ea5ea;
`;
