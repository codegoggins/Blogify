import React from 'react'
import PostCard from './PostCard'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
`;

const CardContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 1.5rem;
`;

const Heading = styled.p`
font-size: 2rem;
color:#0ea5ea;
font-weight: bold;
`;

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