import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Container = styled.div`
background-color: #0f1729;
height: 5rem;
width: full;
padding: 0 2rem;

display: flex;
align-items: center;
justify-content: space-between;
position:fixed;
top:0;
left: 0;
right: 0;
z-index: 10;
border-bottom: ${props => (props.color ? `0.1px solid #0ea6ec` : `none`)};
`;

const Left = styled.div``;

const Center = styled.ul`
display: flex;
align-items: center;
justify-content: space-around;
gap: 2rem;
`;

const Item = styled.li`
cursor: pointer;
transition: all 0.3s ease;
&:hover{
color:#0ea5ea;
}
`;

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


const Image = styled.img`
object-fit: cover;
border-radius: 50%;
height: 2.5rem;
width: 2.5rem;
cursor: pointer;
border:2.5px solid #0ea5ea;
`;


const Logo = styled.h1`
font-family: 'Bevan', cursive;
color: white;
`;




const Navbar = () => {

  const [color,setColor] = useState(false);

  const onScrollColorChange = () => {
    if(window.scrollY > 40){
      setColor(true);
    }else{
      setColor(false);
    }
  }
  window.addEventListener('scroll', onScrollColorChange);
  return (
    <>
    <Container $color={color}>
        <Left>
          <Link to='/'>
           <Logo>Blogify</Logo>
          </Link>
        </Left>
        <Center>
          <Link to='/'>
            <Item>Home</Item>
          </Link>
          <Link to='/about'>
          <Item>About</Item>
          </Link>
          <Link to='/write'>
            <Item>Write</Item>
          </Link>
          <Link to=''>
            <Item>Post</Item>
          </Link>
        </Center>
        <Right>
          <Link to='/login'>
           <Btn>Log In</Btn>
          </Link>
          <Link to='/signup'>
           <Btn>Sign Up</Btn>
          </Link>

           <Image src='https://images.pexels.com/photos/5044316/pexels-photo-5044316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
        </Right>
    </Container>
    </>
  )
}

export default Navbar