import React from "react";
import { Pressable, Text, View } from "react-native";
import { Props } from "../interface/Props";

function CButton({ ...props }) {
  return (
    <Pressable onPress={props.onPress}>
      <View style={props.style}>
        <Text style={{ color: "black", fontSize: 20, fontWeight: "600" }}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

export default CButton;
