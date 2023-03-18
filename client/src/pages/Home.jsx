import React from 'react'
import Featured from '../components/Featured';
import styled from 'styled-components';
import Recent from '../components/Recent';
import Blogs from '../components/Blogs';
import Popup from '../components/Popup';

const Container = styled.div`

`

const Top = styled.div`
  margin-top:5rem;
  width: 100%;
  padding:1rem;
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
       {/* <Popup/> */}
    </Container>
  )
}

export default Home