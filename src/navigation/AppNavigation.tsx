import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../components/HomeTabs";
import LoginScreen from "../screens/Login";
import ShowGroupsScreen from "../screens/ShowGroupsScreen";
import { Provider as PaperProvider } from "react-native-paper";

const Stack = createNativeStackNavigator<RootStackParamList>();

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  ShowGroups: { groupId: string };
};

export default function AppNavigator() {
  return (
    <PaperProvider>
      <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ShowGroups" component={ShowGroupsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
    
  );
}