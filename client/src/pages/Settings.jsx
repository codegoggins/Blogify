import React from 'react'
import styled from 'styled-components'
import {useSelector} from 'react-redux'



const Settings = () => {

  const {currentUser} = useSelector((state)=>state.user);
  console.log(currentUser);

  return (
    <Container>
       <Title>Settings</Title>
       <Center>
       <Image src={currentUser.profileImg} />
       <Form>
       <Details>{currentUser.name}</Details>
       <Details>{currentUser.email}</Details>
       </Form>
       </Center>
    </Container>
  )
}

export default Settings 




/*<------------------------------------------------------  CSS STYLING --------------------------------------------------------------------->*/

const Container = styled.div`
padding: 6rem 5rem;
color: #0ea5ea;

@media(max-width:768px){
margin-top: 5rem;
padding:1rem;
}

`;

const Details = styled.p`
padding: 1rem;
background: transparent;
border: none;
color:white;
font-size: 1rem;
border: 1px solid #0ea5ea;
border-radius: 0.5rem;
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
height:20rem;
width:20rem;
@media(max-width:768px){
    height:14rem;
    width:14rem;
}
`;

const Title = styled.h1`
text-align: center;
`;

const Form = styled.form`
flex: 1;
display:flex;
flex-direction:column;
padding: 1rem;
gap: 1rem;
margin-top: 1rem;
`;

