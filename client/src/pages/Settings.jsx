import React from 'react'
import styled from 'styled-components'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

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

const Center = styled.div`
padding: 1rem;
display: flex;
align-items: center;
@media(max-width:768px){
flex-direction: column;
}
`;

const Image = styled.img`
flex: 1;
margin-top: 2rem;
object-fit: cover;
width:100%;
border-radius: 0.5rem;
height:25rem;
width:25rem;
@media(max-width:768px){
    height:14rem;
    width:14rem;
}
`;

const Title = styled.h1`
text-align: center;
`;

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
flex: 1;
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



const Settings = () => {
  return (
    <Container>
       <Title>Settings</Title>
       <Center>
       <Image src='https://images.pexels.com/photos/2777898/pexels-photo-2777898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
       <Form>
       <Label htmlFor='createFile'>
          <AddAPhotoIcon/>
          <p>Upload an Image</p>
       </Label>
       <Input type='file' id='createFile' style={{display:"none"}}/>
       <Input type='text' placeholder='Name'/>
       <Input type='email' placeholder='Email'/>
       <Input type='password' placeholder='Password'/>
       <CreateBtn>Update</CreateBtn>
       </Form>
       </Center>
    </Container>
  )
}

export default Settings 