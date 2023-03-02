import React from 'react'
import styled from 'styled-components';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';

const Container = styled.div`
display: flex;
flex-direction: column;
gap: 2rem;
padding: 6rem 2rem;
`;
const Title = styled.h1`
color: #0ea5ea;
`;
const Desc = styled.p`
color: white;
`;
const Image = styled.img`
border-radius: 1rem;
`;

const Details = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
const User = styled.span``;

const Time = styled.span``;

const UpdateAndDelete = styled.div`
display: flex;
gap: 1rem;
width: max-content;
`;
const Edit = styled.div`
background-color:#0ea5ea;
color: white;
padding: 0.3rem;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
`;

const DeleteBlog = styled(Edit)``;


const SingleBlog = () => {
  return (
    <Container>
        <Image src='https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
        <Details>
            <User>Nilay Singh</User>
            <Time>24th Feb , 2023</Time>
        </Details>
        <UpdateAndDelete>
          <Edit>
            <CreateIcon/>
          </Edit>
          <DeleteBlog>
            <DeleteIcon/>
          </DeleteBlog>
        </UpdateAndDelete>
        <Title>The journey of a thousand miles begins with a single step</Title>
        <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore molestias corrupti dolor facilis cupiditate a. Dolores dolore, molestias veniam neque animi, repellendus, reiciendis sint excepturi exercitationem eveniet ex dolorum ea voluptate quas aliquid temporibus voluptates vitae eum! Ipsa nobis laboriosam deserunt. Omnis libero quisquam nihil debitis dolores voluptatibus provident ullam labore, dolor deleniti ipsam maiores pariatur, animi magnam quibusdam autem. Quod ullam, unde minima vitae, quos ducimus rerum pariatur dolores corporis eum est nemo beatae praesentium maiores esse id repudiandae reprehenderit aspernatur, veniam ab magni quam accusamus exercitationem. Nisi iure reprehenderit placeat quisquam, maxime quibusdam culpa nulla ab qui! Commodi iusto fugiat consequuntur officia. Officiis, dolores animi quidem sapiente totam magnam, fugiat similique illo soluta error ipsam. Porro unde quo odit architecto. Beatae aut reiciendis repudiandae in voluptate ad itaque dolore. Cum nisi repudiandae deleniti quas nobis pariatur totam, facilis magni, ea repellendus velit laboriosam laudantium saepe temporibus numquam. Facilis ad ducimus obcaecati tempore vitae sit velit in dolore dignissimos ab atque, cum, molestias, porro nobis est? Commodi sequi ea esse amet animi mollitia totam, nemo in reprehenderit? Possimus deleniti perspiciatis molestias, ut necessitatibus aliquam quia accusamus beatae natus repudiandae impedit accusantium, corrupti maiores eius neque molestiae corporis rerum doloremque!</Desc>
    </Container>
  )
}

export default SingleBlog