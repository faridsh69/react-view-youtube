import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { VideoPlayer } from "./VideoPlayer";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>1</Text>
      <VideoPlayer />
      <Text>2</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
