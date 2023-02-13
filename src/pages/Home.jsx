import React from 'react'
import Featured from '../components/Featured';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import styled from 'styled-components';
import Recent from '../components/Recent';

const Container = styled.div`
padding: 1rem 5rem;
`

const Home = () => {
  return (
    <Container>
       {/* <Navbar/> */}
       {/* <Footer/> */}
       {/* <Featured/> */}
       <Recent/>
    </Container>
  )
}


export default Home