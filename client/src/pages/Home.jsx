import React from 'react'
import Featured from '../components/Featured';
import styled from 'styled-components';
import Recent from '../components/Recent';
import Blogs from '../components/Blogs';

const Container = styled.div`
padding: 6rem 5rem;
display: flex;
flex-direction: column;
gap: 2rem;
`

const Top = styled.div`
`;
const Image = styled.img`
object-fit: cover;
border-radius: 1rem;
width: 100%;
`;

const Home = () => {
  return (
    <Container>
       <Top>
          <Image src='https://images.pexels.com/photos/2144922/pexels-photo-2144922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
       </Top>
       <Blogs/>
       <Recent/>
       <Featured/>
    </Container>
  )
}


export default Home