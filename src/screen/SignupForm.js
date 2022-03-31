import { View, TextInput, Text, Button } from "react-native";
import Input from "../components/Input";
import axios from "axios";
import { signInWithCustomToken, signOut } from "firebase/auth";

const ROOT_URL =
  "https://us-central1-one-time-password-75c82.cloudfunctions.net";

import React, { useState } from "react";

const SignupForm = () => {
  const [phone, setPhone] = useState("");
  const [phoneVerify, setPhoneVerify] = useState("");
  const [codeNumber, setCodeNumber] = useState("");
  const [token, setToken] = useState("");

  const handleSubmit = async () => {
    try {
      await axios.post(`${ROOT_URL}/createUser`, {
        phone,
      });
      await axios.post(`${ROOT_URL}/requestOneTimePassword`, { phone });
      setPhone("");
    } catch (err) {
      console.log(err.response.data);
      setPhone("");
    }
  };
  const handleSignIn = async (phone, code) => {
    try {
      let response = await axios.post(`${ROOT_URL}/verifyOneTimePassword`, {
        phone: phoneVerify,
        code: codeNumber,
      });
      response.data.token && setToken(response.data.token);
      signInWithCustomToken(response.data.token);
      setPhoneVerify("");
      setCodeNumber("");
    } catch (err) {
      console.log(err.response.data);
      setPhoneVerify("");
      setCodeNumber("");
    }
  };
  const handleSignOut = async () => {
    await signOut();
  };

  const handlePhoneChange = (phone) => {
    setPhone(phone);
  };
  const handlePhoneVerify = (phone) => {
    setPhoneVerify(phone);
  };
  const handleCodeChange = (code) => {
    setCodeNumber(code);
  };

  return (
    <View style={{ marginVertical: 20 }}>
      <View style={{ marginVertical: 20 }}>
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>Sign Up</Text>
        <Input
          title="Phone Number: "
          handlePhoneChange={handlePhoneChange}
          value={phone}
        />
        <Button title="Submit" onPress={() => handleSubmit()} />
      </View>
      <View style={{ marginVertical: 20 }}>
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>Sign In</Text>
        <Input
          title="Phone Number: "
          value={phoneVerify}
          handlePhoneChange={handlePhoneVerify}
        />
        <Input
          title="Code: "
          value={codeNumber}
          handlePhoneChange={handleCodeChange}
        />
        <Button title="Sign In" color="green" onPress={handleSignIn} />
        <Button title="Sign In" color="green" onPress={handleSignIn} />
      </View>
      {token ? <Text>Signed In</Text> : <Text>Signed Out</Text>}
    </View>
  );
};

export default SignupForm;
