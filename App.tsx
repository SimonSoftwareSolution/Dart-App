import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const login = () => {};
  return (
    <View style={styles.container}>
      <Text>Hallo bitte logge dich ein oder registriere dich</Text>
      <Button title='Login' onPress={login}/>
      <StatusBar style="auto" />
    </View>
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
