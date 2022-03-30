import { View, TextInput, Text, Button } from "react-native";
import Input from "../components/Input";
import axios from "axios";

const ROOT_URL =
  "https://us-central1-one-time-password-75c82.cloudfunctions.net";

import React, { useState } from "react";

const SignupForm = () => {
  const [phone, setPhone] = useState("");

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

  const handlePhoneChange = (phone) => {
    setPhone(phone);
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
        <Input title="Phone Number: " />
        <Input title="Code: " />
        <Button title="Sign In" color="green" />
      </View>
    </View>
  );
};

export default SignupForm;
