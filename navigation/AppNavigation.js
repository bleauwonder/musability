import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import LogInScreen from '../screens/LogInScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SignUpScreen from '../screens/SignUpScreen';

const AppNavigation = createStackNavigator({
  Home: { screen: HomeScreen },
  LogIn: { screen: LogInScreen},
  Profile: { screen: ProfileScreen },
  SignUp: { screen: SignUpScreen }
});

export default AppNavigation;
