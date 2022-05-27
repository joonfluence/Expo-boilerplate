import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';

export default function App() {
  return (
    <Wrapper>
      <Title>Open up App.tsx to start working on your app!!</Title>
      <StatusBar />
    </Wrapper>
  );
}

const Wrapper = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text``;
