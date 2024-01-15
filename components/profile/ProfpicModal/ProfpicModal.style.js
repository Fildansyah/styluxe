import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    width: "100%",
    padding: 10,
    borderRadius: 10,
  },
  header: {
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray2,
  },
  title: { fontFamily: "semibold", fontSize: 18 },
  options: {
    padding: 10,
    fontFamily: "medium",
    fontSize: 16,
  },
  buttonsContainer: { flexDirection: "column" },
  optionsBtn: { flexDirection: "row", alignItems: "center" },
});

export default styles;
