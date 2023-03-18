import React from 'react'
import styled from 'styled-components'




const RecentCard = () => {
  return (
    <Container>
        <PostImg src='https://images.pexels.com/photos/1743165/pexels-photo-1743165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
        <PostContent>
             <PostTitle>Helpful Tips for Freelancers</PostTitle>
             <PostDesc>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quia voluptas voluptate repellendus porro officia repudiandae ducimus, quae sapiente perferendis.</PostDesc>
             <Tags>
                <Tag>Freelance</Tag>
                <Tag>Finance</Tag>
             </Tags>
             <PostDetails>
                <PostDate>23 Feb , 2023</PostDate>
                <Author>
                    <AuthorImg src='https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
                    <AuthorName>Nilay</AuthorName>
                </Author>
             </PostDetails>
        </PostContent>
    </Container>
  )
}

export default RecentCard





/*<------------------------------------------------------  CSS STYLING --------------------------------------------------------------------->*/


const Container = styled.div`
display: flex;
gap: 1rem;
align-items: center;
margin: 0 auto;


@media(max-width:768px){
  padding: 1rem;
  border-radius: 2rem;
  border: 1px solid #0ea5ea;
  flex-direction: column;
  height: 35rem;
}

`;

const PostImg = styled.img`
flex: 2;
height: 12rem;
width: 100%;
object-fit: cover;
border-radius: 1.5rem;
`

const PostContent = styled.div`
flex: 6;
display: flex;
flex-direction: column;
gap: 0.7rem;

@media(max-width:768px){
  flex: 1;
}

`;

const PostTitle = styled.p`
font-size: 1.7rem;
color: white;
font-weight:bold;
cursor: pointer;
transition: all 0.3s ease;
&:hover{
color:#0ea5ea;
}
`;

const PostDesc = styled.p`
font-size: 0.85rem;
`;

const Tags = styled.div`
display: flex;
align-items: center;
gap: 0.5rem;
`;

const Tag = styled.p`
font-size: 0.65rem;
color: white;
background-color:#0ea5ea;
padding: 0.2rem 0.4rem;
border-radius: 0.8rem;
cursor: pointer;
`;

const PostDetails = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`

const Author = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 0.5rem;
`
const AuthorImg = styled.img`
height: 2rem;
width: 2rem;
object-fit: cover;
border-radius: 50%;
border:2.5px solid #0ea5ea;
`
const AuthorName = styled.p`
font-size: 0.7rem;
`
const PostDate = styled.p`
font-size: 0.7rem;
`

