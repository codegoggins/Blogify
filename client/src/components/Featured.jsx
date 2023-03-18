import React from 'react'
import PostCard from './PostCard'
import styled from 'styled-components'


const Featured = () => {
  return (
    <Container>
        <Heading>Featured</Heading>
    <CardContainer>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
    </CardContainer>
    </Container>
  )
}

export default Featured

/*<------------------------------------------------------  CSS STYLING --------------------------------------------------------------------->*/

const Container = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
`;

const CardContainer = styled.div`
display: grid;
padding: 1rem;
grid-template-columns: 1fr 1fr 1fr;
gap: 1.5rem;

@media(max-width:768px){
  grid-template-columns: 1fr;
}

`;

const Heading = styled.p`
font-size: 2rem;
color:#0ea5ea;
font-weight: bold;
text-align: center;
`;
