import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View></View>
      <View style={styles.box1}>
        <Text>h11</Text>
        <Text>h11</Text>
      </View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
      <View></View>
      <StatusBar StatusBarStyle={"blue"} style={styles.StatusBarStyle} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 25,
  },
  StatusBarStyle: {
    backgroundColor: "dark-content"
  },
  box1: {
    flex: 1,
    backgroundColor: "yellow"
  },
  box2: {
    flex: 1,
    backgroundColor: "red"
  },
  box3: {
    flex: 1,
    backgroundColor: "blue"
  },

});
