import { Dispatch, SetStateAction } from "react";
import { StyleSheet, TextInput } from "react-native";

type Props = {
  value: string;
  onChangeText: Dispatch<SetStateAction<string>>;
  placeholder: string;
};


function CInput({ ...props }) {
  return <TextInput {...props} style={styles.input}/>;
}

const styles = StyleSheet.create({
  input: {
      height: 45,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius: 10,
      marginHorizontal: 20,
      marginVertical: 15
    },
});

export default CInput;
