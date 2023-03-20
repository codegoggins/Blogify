import React, { useState } from 'react'
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';


const Popup = ({setError,msg}) => {

  const [open,setOpen] = useState(true);  

  return (
    <>
    {
    open && (
        <>
        <Container>
        </Container>
        <Modal>
        <Close onClick={
          ()=>{
            setOpen(!open);
            setError(false);
          }}>
           <CloseIcon fontSize='large'/>
        </Close>
        <Message>{msg}</Message>
        </Modal>
        </>
      )
    }
    </>
  )
}

export default Popup


/*<------------------------------------------------------  CSS STYLING --------------------------------------------------------------------->*/

const Container = styled.div`
position:fixed;
top: 0;
bottom: 0;
height: 100vh;
width: 100vw;
background-color:black;
opacity: 0.8;
z-index: 20;
`;

const Modal = styled.div`
background-color: #0f1729; /* set the background color with full opacity */
color: #0ea5ea;
position: fixed;
height: 15rem;
width: 30rem;
z-index: 30;
top: 30%;
left: 30%;
padding: 0.5rem;
opacity:1;
text-align: center;


@media(max-width:760px){
    height: 15rem;
    width: 15rem;
    top:30%;
    left:15%;
}
`;

const Close = styled.div`
color: white;
cursor: pointer;
width: 100%;
display: flex;
justify-content: flex-end;
color: #0ea5ea;
`

const Message = styled.p`
font-size: 2rem;
text-align: center;
margin-top: 2rem;
`;