import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  border:1px solid #223044;
  height: 5rem;
  border-radius: 0.5rem;
  width:full;
  margin: 1rem 1rem;
  padding: 1rem 3rem;
  margin-top: 3rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media(max-width:768px){
    flex-direction: column;
    height: 8rem;
    text-align: center;
    padding: 1rem;
  }

`;

const Logo = styled.h1`
font-family: 'Bevan', cursive;
color: #0ea5ea;
`;

const Text = styled.p`
 color: white;
`

const Footer = () => {
  return (
    <Container>
        <Logo>Blogify</Logo>
        <Text>© Developed by <a href='https://github.com/codegoggins'><em>codegoggins.</em></a></Text>
    </Container>
  )
}

export default Footer