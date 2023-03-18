import React from 'react'
import styled from 'styled-components'
import RecentCard from './RecentCard';


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

/*<------------------------------------------------------  CSS STYLING --------------------------------------------------------------------->*/


const Container = styled.div`
padding: 1rem;
`;

const Heading = styled.p`
font-size: 2rem;
color:#0ea5ea;
font-weight: bold;
text-align: center;
margin-bottom: 2rem;
`;

const RecentBlogContainer = styled.div`
display:flex;
flex-direction: column;
gap: 1rem;

@media(max-width:768px){
  gap: 3rem;
}

`;