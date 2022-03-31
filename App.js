import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import SignupForm from "./src/screen/SignupForm";
import firebase from "firebase/compat/app";
const firebaseConfig = require("./service_account.json");

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

export default function App() {
  useEffect(() => {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
  }, []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <SignupForm />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 20,
  },
});
