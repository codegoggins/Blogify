import React from 'react'
import styled from 'styled-components'
import PostCard from './PostCard'

const Container = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
align-items: center;
`;

const Posts = styled.div`
display: flex;
flex-direction: column;
gap: 2rem;
width: 100%;
padding: 1rem;
`;


const ShowMoreBtn = styled.button`
width: max-content;
align-self: center;
padding: 0.8rem 4rem;
background: linear-gradient(90deg, #0ea5ea, #0bd1d1 51%, #0ea5ea);
background-size: 200%;
background-position: left;
font-weight:400;
color: white;
font-size: 0.8rem;
border-radius:3rem;
border: none;
cursor: pointer;
transition: all 0.3s ease;

&:hover{
  background-position: right;
};
`

const Blogs = () => {
  return (
    <Container>
        <Posts>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        </Posts>
        <ShowMoreBtn>
            Show More
        </ShowMoreBtn> 
    </Container>
  )
}

export default Blogs