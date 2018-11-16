import React from "react";
import { View, TextInput } from "react-native";

const Input = props => {
  return (
    <View style={{ padding: 10 }}>
      <TextInput
        style={{ height: 40, color: "#ccc", fontSize: 20 }}
        placeholder="Type to search!"
        onChangeText={text => props.InputHandler(text)}
      />
    </View>
  );
};

export default Input;
