import { StyleSheet } from 'react-native';
import "react-native-gesture-handler";
import AppNavigator from './src/navigation/AppNavigation';

export default function App() {
  return (
    <AppNavigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
