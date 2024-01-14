import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray2,
  },
  menuContainer: {
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
  },
  label: {
    color: COLORS.black,
    fontFamily: "regular",
    fontSize: 18,
  }
});

export default styles;
