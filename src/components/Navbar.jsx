import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
height: 5rem;
width: full;
padding: 0 2rem;

display: flex;
align-items: center;
justify-content: space-between;
`;

const Left = styled.div``;

const Center = styled.ul`
display: flex;
align-items: center;
justify-content: space-around;
gap: 2rem;
`;

const Item = styled.li``;

const Right = styled.div`
display:flex;
align-items: center;
justify-content: space-around;
gap: 1rem;
`;

const Btn = styled.button`
padding: 0.6rem 1rem;
background: linear-gradient(90deg, #0ea5ea, #0bd1d1 51%, #0ea5ea);
background-size: 200%;
background-position: left;
font-weight: bold;
color: white;
font-size: 0.8rem;
border-radius: 6px;
border: none;
cursor: pointer;
`;


const Image = styled.img`
object-fit: cover;
border-radius: 50%;
height: 2.5rem;
width: 2.5rem;
cursor: pointer;
`;


const Logo = styled.h1`
font-family: 'Bevan', cursive;
color: white;
`;




const Navbar = () => {
  return (
    <>
    <Container>
        <Left>
           <Logo>Blogify</Logo>
        </Left>
        <Center>
            <Item>Home</Item>
            <Item>About</Item>
            <Item>Topics</Item>
            <Item>Recent</Item>
            <Item>Post</Item>
        </Center>
        <Right>
           <Btn>Log In</Btn>
           <Btn>Sign Up</Btn>
           <Image src='https://images.pexels.com/photos/5044316/pexels-photo-5044316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
        </Right>
    </Container>
    </>
  )
}

export default Navbar