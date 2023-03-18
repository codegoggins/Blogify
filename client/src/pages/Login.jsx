import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
   margin: 5rem auto;
   height: auto;
   width: 20rem;
   border: 1px solid #7d91b0;
   border-radius: 1rem;
   @media(max-width:768px){
     width: 15rem;
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

const RegLink = styled.p`
display: flex;
gap: 0.5rem;
@media(max-width:768px){
     flex-direction: column;
     align-items: center;
}
`;

const Login = () => {
  return (
    <Container>
        <Title>Log In</Title>
        <Form>
        <Input placeholder='Email' type='text'/>
        <Input placeholder='Password' type='password'/>
        <Btn>Login</Btn>
        <RegLink>
        <span>
            Don't have an account ?
        </span>
        <span>
            <em>sign up</em>
        </span>
        </RegLink> 
        </Form>
    </Container>
  )
}

export default Login