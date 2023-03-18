import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

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
z-index: 5;
`;

const Left = styled.div`
`;

const Center = styled.ul`
display: flex;
align-items: center;
justify-content: space-around;
gap: 2rem;

@media(max-width:980px){
   display:none;   
}

`;

const Item = styled.li`
cursor: pointer;
transition: all 0.3s ease;
list-style: none;
&:hover{
color:#0ea5ea;
}
`;

const Right = styled.div`
display:flex;
align-items: center;
justify-content: space-around;
gap: 1rem;

@media(max-width:980px){
   display:none;   
}

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

const SideMenu = styled.div`
position:fixed;
width: 70vw;
height: 100%;
top: 0;
bottom: 0;
right: 0;
z-index: 10;
padding: 1rem;
display:none;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 2rem;
background-color: #0f1729;

@media(max-width:980px){
  display:flex;
}

`;

const SideCenter = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 2rem;
`;
const SideRight = styled.div`
display:flex;
flex-direction: column-reverse;
align-items: center;
justify-content: space-around;
gap: 1rem;
`;


const SideLeft = styled.div`
`;

const Close = styled.div`
width: 100%;
display: flex;
justify-content: flex-end;
color:#0ea5ea;
cursor: pointer;
`;

const Menu = styled.div`
color:#0ea5ea;
cursor: pointer;
display: none;

@media(max-width:980px){
   display: block;
}

`;

const Navbar = () => {

  const [open,setOpen]  = useState(false);

  return (
    <>
    <Container>
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
          <Link to='/settings'>
           <Image src='https://images.pexels.com/photos/5044316/pexels-photo-5044316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
          </Link>
        </Right>
        <Menu onClick={()=>setOpen(!open)}>
            <MenuIcon fontSize='large'/>
        </Menu>
    </Container>
{    
  open && <SideMenu>
        <Close onClick={()=>setOpen(!open)}>
        <CloseIcon fontSize='large'/>
        </Close>
        <SideLeft>
          <Link to='/'>
           <Logo onClick={()=>setOpen(!open)}>Blogify</Logo>
          </Link>
        </SideLeft>
         <SideCenter>
            <Link to='/'>
              <Item onClick={()=>setOpen(!open)}>Home</Item>
            </Link>
            <Link to='/about'>
            <Item onClick={()=>setOpen(!open)}>About</Item>
            </Link>
            <Link to='/write'>
              <Item onClick={()=>setOpen(!open)}>Write</Item>
            </Link>
            <Link to=''>
              <Item onClick={()=>setOpen(!open)}>Post</Item>
            </Link>
          </SideCenter>
          <SideRight>
          <Link to='/login'>
           <Btn onClick={()=>setOpen(!open)}>Log In</Btn>
          </Link>
          <Link to='/signup'>
           <Btn onClick={()=>setOpen(!open)}>Sign Up</Btn>
          </Link>
          <Link to='/settings'>
           <Image onClick={()=>setOpen(!open)} src='https://images.pexels.com/photos/5044316/pexels-photo-5044316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
          </Link>
        </SideRight>
    </SideMenu>
  }
    </>
  );
}

export default Navbar