import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";

export default function WelcomeScreen() {
  const [firstNName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        indicatorStyle="white"
        style={styles.container}
        keyboardDismissMode="on-drag"
      >
        <Text style={styles.headerText}>Welcome to Little Lemon</Text>
        <Text style={styles.regularText}>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. We would
          love to hear more about your experience with us!
        </Text>
        <TextInput
          style={styles.textInput}
          value={firstNName}
          placeholder="First Name"
          onChangeText={setFirstName}
        />

        <TextInput
          style={styles.textInput}
          value={email}
          placeholder="Email"
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.textInput}
          value={message}
          placeholder="Message"
          onChangeText={setMessage}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: "#EDEFEE",
    textAlign: "center",
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
  },

  textInput: {
    backgroundColor: "#EDEFEE",
    borderRadius: 5,
    padding: 10,
    height: 40,
    margin: 12,
  },
});
