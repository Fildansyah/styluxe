import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 5,
    paddingVertical: 10,
    gap: 10,
  },
  imageContainer: {
    flexDirection: "column",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
    gap: 10,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 100,
    resizeMode: "cover",
  },
  editBtn: {
    padding: 5,
    backgroundColor: COLORS.primary,
    borderRadius: 100,
    position: "absolute",
    bottom: 0,
    right: 0,
    borderWidth: 2,
    borderColor: "#fff",
  },
  profileName: {
    fontFamily: "semibold",
    fontSize: 18,
    color: COLORS.primary,
    maxWidth: 200,
  },
  formContainer: { paddingHorizontal: 30, paddingTop: 40, gap: 24 },
  formTitle: { fontSize: 20, fontFamily: "semibold" },
  inputContainer: { flexDirection: "column", gap: 12 },
  inputLabel: { fontSize: 16, fontFamily: "semibold", color: "#6C7275" },
  inputText: {borderWidth: 1,borderRadius: 5, padding: 10},
  scrollViewContent: {
    flexGrow: 1, // Ensure that content can be scrolled properly
  },
});

export default styles;
