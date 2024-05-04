import React from 'react';
import { Text } from 'react-native';
import { Container, Title } from './styles'

function Header(){
  return(
    <Container>
      <Title>
        Blu
        <Text style={{fontStyle: 'italic', color: '#1E90FF', fontWeight:'bold'}}>Coffee</Text>
      </Title>
    </Container>
  )
}

export default Header;

