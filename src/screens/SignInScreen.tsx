import { ImageBackground, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import GoogleLogin from '~components/Shared/GoogleLogin';
import Typography from '~components/Shared/Typography';
import { windowHeight, windowWidth } from '~constants/Layout';

export default function SignInScreen() {
  return (
    <ImageBackground
      source={require('~assets/images/main.png')}
      resizeMode="cover"
      style={styles.image}
    >
      <InnerWrapper>
        <TitleSection>
          <Title>로그인 화면</Title>
        </TitleSection>
        <LoginUISection>
          <GoogleLogin />
        </LoginUISection>
      </InnerWrapper>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  image: {
    left: -5,
    width: windowWidth + 10,
    height: windowHeight + 10,
  },
});

const InnerWrapper = styled.View`
  flex: 1;
  position: relative;
  align-items: center;
  justify-content: center;
`;

const TitleSection = styled.View`
  position: absolute;
  top: 23%;
`;

const LoginUISection = styled.View`
  position: absolute;
  top: 77%;
`;

const Title = styled(Typography)`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.background.paper}
  font-weight: bold;
`;
