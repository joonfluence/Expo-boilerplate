import { NavigatorScreenParams } from '@react-navigation/native';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList>;
  SignIn: undefined;
  Modal: undefined;
  NotFound: undefined;
};

export type RootTabParamList = {
  Main: undefined;
  Search: undefined;
  Comment: undefined;
};
