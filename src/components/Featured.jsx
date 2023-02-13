import React from 'react'
import PostCard from './PostCard'
import styled from 'styled-components'

const Container = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 1.5rem;
`;

const Featured = () => {
  return (
    <Container>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
    </Container>
  )
}

export default Featured