import { StyleSheet } from "react-native";
import COLORS from "../../consts/Color";

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  btn: {
    height: 60,
    marginHorizontal: 20,
    backgroundColor: COLORS.lightBlue,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50
  }
});

export default styles;
