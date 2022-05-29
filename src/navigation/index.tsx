import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateScreen from '~screens/CreateScreen';
import MainScreen from '~screens/MainScreen';
import MyPageScreen from '~screens/MyPageScreen';
import SignInScreen from '~screens/SignInScreen';
import styled from 'styled-components/native';
import Typography from '~components/Shared/Typography';
import { BNB_SCREEN_NAME } from '../../constants/SCREEN_NAME';

import FeedLogo from '~assets/Icons/Navigation/Feed/Feed.svg';
import ClickedFeedLogo from '~assets/Icons/Navigation/Feed/Feed_clicked.svg';
import ClickedCreateLogo from '~assets/Icons/Navigation/Create/Create_clicked.svg';
import CreateLogo from '~assets/Icons/Navigation/Create/Create.svg';
import ClickedSettingLogo from '~assets/Icons/Navigation/Setting/Setting_clicked.svg';
import SettingLogo from '~assets/Icons/Navigation/Setting/Setting.svg';
import { RootStackParamList } from 'types';

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const accessToken = false;

  return (
    <Stack.Navigator>
      {/* {!accessToken && (
        <Stack.Screen name="SignIn" options={{ headerShown: false }}>
          {(props) => <SignInScreen />}
        </Stack.Screen>
      )} */}
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
export type BnbMainNavigator = {
  [BNB_SCREEN_NAME.MAIN]: undefined;
  [BNB_SCREEN_NAME.CREATE]: undefined;
  [BNB_SCREEN_NAME.MYPAGE]: undefined;
};
const BottomTab = createBottomTabNavigator<BnbMainNavigator>();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName={BNB_SCREEN_NAME.MAIN}
      backBehavior="order"
      screenOptions={{
        headerShown: false,
      }}
    >
      <BottomTab.Screen
        name={BNB_SCREEN_NAME.MAIN}
        component={MainScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <BottomBarTypo isClicked={focused}>피드</BottomBarTypo>
          ),
          tabBarIcon: ({ focused }) =>
            focused ? <ClickedFeedLogo /> : <FeedLogo />,
        }}
      />
      <BottomTab.Screen
        name={BNB_SCREEN_NAME.CREATE}
        component={CreateScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <BottomBarTypo isClicked={focused}>입력</BottomBarTypo>
          ),
          tabBarIcon: ({ focused }) =>
            focused ? (
              <ClickedCreateLogo />
            ) : (
              <CreateBtnBox>
                <CreateLogo />
              </CreateBtnBox>
            ),
        }}
      />
      <BottomTab.Screen
        name={BNB_SCREEN_NAME.MYPAGE}
        component={MyPageScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <BottomBarTypo isClicked={focused}>마이</BottomBarTypo>
          ),
          tabBarIcon: ({ focused }) =>
            focused ? <ClickedSettingLogo /> : <SettingLogo />,
        }}
      />
    </BottomTab.Navigator>
  );
}

const BottomBarTypo = styled(Typography).attrs({
  textSize: '10px',
})<{
  isClicked: boolean;
}>`
  color: ${({ theme, isClicked }) =>
    isClicked ? theme.colors.primary.sub : theme.colors.grey.AA};
`;

const CreateBtnBox = styled.View`
  padding-top: 8px;
`;
