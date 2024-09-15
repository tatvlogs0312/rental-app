import { StyleSheet } from "react-native";
import COLORS from "../../consts/Color";

const styles = StyleSheet.create({
  image: {
    height: 420,
    width: "100%",
    borderBottomLeftRadius: 100,
  },

  indicatorContainer: {
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  indicator: {
    height: 3,
    width: 30,
    backgroundColor: COLORS.grey,
    borderRadius: 5,
    marginHorizontal: 5,
  },

  indicatorActive: {
    backgroundColor: COLORS.dark,
  },

  btn: {
    height: 60,
    marginHorizontal: 20,
    backgroundColor: COLORS.lightBlue,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    width: 160
  },

  btnText: { color: "white", fontWeight: "600", fontSize: 20 },

  title: { fontSize: 32, fontWeight: "bold", color: COLORS.lightBlue },

  textStyle: { fontSize: 16, color: COLORS.grey },
});

export default styles;
