import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";

const Input = ({ title, handlePhoneChange, value }) => {
  return (
    <View style={{ flexDirection: "row", marginVertical: 20 }}>
      <Text style={{ fontSize: 15 }}>{title}: </Text>
      <TextInput
        value={value}
        onChangeText={handlePhoneChange}
        style={{ borderBottomColor: "grey", borderBottomWidth: 1, flex: 1 }}
        keyboardType="numeric"
      />
    </View>
  );
};

export default Input;
