import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    width: "100%",
    padding: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  header: {
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray2,
  },
  title: { fontFamily: "semibold", fontSize: 18 },
  confirmation: {
    textAlign: "center",
    padding: 20,
    fontFamily: "medium",
    fontSize: 16,
    color: COLORS.gray,
  },
  buttonsContainer: { flexDirection: "row", gap: 10 },
  buttonCancel: {
    padding: 5,
    backgroundColor: COLORS.white,
    borderRadius: 100,
    width: "100%",
    flex: 1,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  textCancel: {
    textAlign: "center",
    color: COLORS.primary,
    fontFamily: "medium",
  },
  buttonYes: {
    padding: 5,
    backgroundColor: COLORS.primary,
    borderRadius: 100,
    flex: 1,
  },
  textYes: {
    textAlign: "center",
    color: COLORS.white,
    fontFamily: "medium",
  },
});

export default styles;
