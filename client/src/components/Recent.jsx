import React from 'react'
import styled from 'styled-components'
import RecentCard from './RecentCard';

const Container = styled.div`
display: flex;
flex-direction: column;
gap: 1.5rem;
`;

const Heading = styled.p`
font-size: 2rem;
color:#0ea5ea;
font-weight: bold;
`;

const RecentBlogContainer = styled.div`
display:flex;
flex-direction: column;
gap: 1rem;
`;



const Recent = () => {
  return (
      <Container>
          <Heading>Recent Blogs</Heading>
          <RecentBlogContainer>
               <RecentCard/>
               <RecentCard/>
               <RecentCard/>
               <RecentCard/>
               <RecentCard/>
               <RecentCard/>
               <RecentCard/>
          </RecentBlogContainer>
      </Container>
  )
}

export default Recent