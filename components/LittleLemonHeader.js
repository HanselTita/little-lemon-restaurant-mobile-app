import { Image, StyleSheet, Text, View } from "react-native";

export default function LittleLemonHeader() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../image/logo.png")}
        resizeMode="center"
      />
      <Text style={styles.headerText}>Little Lemon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EE9972",
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
  },

  logo: {
    width: 100,
    height: 100,
  },
});
