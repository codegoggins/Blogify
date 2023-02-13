import React from 'react'
import styled from 'styled-components'
import RecentCard from './RecentCard';

const Container = styled.div``;

const Heading = styled.p``;

const RecentBlogContainer = styled.div``;



const Recent = () => {
  return (
      <Container>
          <RecentBlogContainer>
               <RecentCard/>
          </RecentBlogContainer>
      </Container>
  )
}

export default Recent