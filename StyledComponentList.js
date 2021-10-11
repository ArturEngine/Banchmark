import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';

const ContainerItem = styled.View`
  height: 100px;
  border-width: 1px;
  border-color: silver;
  justify-content: center;
  align-items: center;
`;

const ContainerScroll = styled.ScrollView`
  flex-grow: 1;
`;

const ContainerRed = styled.View`
  background-color: red;
  height: 100px;
  background-color: red;
  justify-content: center;
  align-items: center;
`;

const ContainerBlue = styled.View`
  background-color: red;
  height: 100px;
  background-color: red;
  justify-content: center;
  align-items: center;
`;

const Row = styled.View`
  flex-direction: row;
`;

export const StyledComponentList = ({data}) => {
  const renderItem = item => (
    <ContainerItem key={item.id}>
      <Text>{item.title}</Text>
      <Row>
        <ContainerRed>
          <Text>{item.title}</Text>
        </ContainerRed>
        <ContainerBlue>
          <Text>{item.title}</Text>
        </ContainerBlue>
      </Row>
    </ContainerItem>
  );
  return (
    <ContainerScroll id="StyleComponentList">
      {data.map(renderItem)}
    </ContainerScroll>
  );
};
