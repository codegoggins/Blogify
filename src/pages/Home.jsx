import React from 'react'
import Featured from '../components/Featured';
import styled from 'styled-components';
import Recent from '../components/Recent';

const Container = styled.div`
padding: 10rem 5rem;
display: flex;
flex-direction: column;
gap: 2rem;
`

const Home = () => {
  return (
    <Container>
       <Featured/>
       <Recent/>
    </Container>
  )
}


export default Home