import React, { useState } from 'react'
import styled from 'styled-components';
import {Link,useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { signUpFailure, signUpStart, signUpSuccess } from '../redux/userSlice';
import axios from 'axios'

const SignUp = () => {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
      e.preventDefault();
      dispatch(signUpStart());

      try{
        const res = await axios.post('/auth/signup',{
          name,
          email,
          password
        });
        dispatch(signUpSuccess(res.data));
        navigate('/login');
      }catch(err){
         dispatch(signUpFailure());
      }
  }

  return (
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