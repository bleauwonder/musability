import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LogInScreen';
import ProfileScreen from '../screens/ProfileScreen';
import NewReviewScreen from '../screens/NewReviewScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

HomeStack.path = '';

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
  },
  config
);

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-microphone' : 'md-microphone'} />
  ),
};

ProfileStack.path = '';

const LogInStack = createStackNavigator(
  {
    Settings: LoginScreen,
  },
  config
);

LogInStack.navigationOptions = {
  tabBarLabel: 'Login',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-log-in' : 'md-log-in'} />
  ),
};

LogInStack.path = '';

const ReviewStack = createStackNavigator(
  {
    Settings: NewReviewScreen,
  },
  config
);

ReviewStack.navigationOptions = {
  tabBarLabel: 'Review',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-log-in' : 'md-log-in'} />
  ),
};

ReviewStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LogInStack,
  ProfileStack,
  ReviewStack
});

tabNavigator.path = '';

export default tabNavigator;
