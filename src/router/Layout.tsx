import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import OnboardingScreen from "../screens/onboarding/OnboardingScreen";
import HomeScreen from "../screens/home/HomeScreen";
import LoginScreen from "../screens/login/LoginScreen";
import RegisterScreen from "../screens/register/ResgisterScreen";

const Stack = createStackNavigator();

function Layout() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OnboardingScreen" screenOptions={{headerShown: true}}>
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      </Stack.Navigator>

      
    </NavigationContainer>
  );
}

export default Layout;
