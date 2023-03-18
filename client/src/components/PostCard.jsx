import React from 'react'
import styled from 'styled-components'


const PostCard = () => {
  return (
    <Container>
        <CardImg src='https://images.pexels.com/photos/8299959/pexels-photo-8299959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
        <Tags>
            <Tag>Travel</Tag>
            <Tag>Lifestyle</Tag>
        </Tags>
        <CardTitle>The journey of a thousand miles begins with a single step</CardTitle>
        <CardDetail>
            <Author>Nilay Singh</Author>
            <PostTime>14 Feb , 2023</PostTime>
        </CardDetail>
    </Container>
  )
}

export default PostCard




/*<------------------------------------------------------  CSS STYLING --------------------------------------------------------------------->*/


const Container = styled.div`
background-color:#131b30;
border: 1px solid #223044;
padding: 1rem;
width:100%;
height: auto;
display: flex;
flex-direction: column;
justify-content: space-between;
gap: 0.5rem;
border-radius: 1rem;
margin: 0 auto;
`;

const CardImg = styled.img`
object-fit: cover;
height: 12rem;
border-radius: 0.5rem;
`;

const Tags = styled.div`
display: flex;
align-items: center;
gap: 0.5rem;
`;

const Tag = styled.p`
font-size: 0.7rem;
color: white;
background-color:#0ea5ea;
padding: 0.2rem 0.4rem;
border-radius: 0.8rem;
cursor: pointer;
`;

const CardTitle = styled.h1`
font-size: 1.5rem;
color: white;
transition: all 0.3s ease;
cursor: pointer;
&:hover{
color:#0ea5ea;
}
`;

const CardDetail = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
font-size: 0.8rem;
`;

const Author = styled.p``;

const PostTime = styled.p``;