import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
    rowGap: 40,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 20,
  },
  title: {
    flex: 1,
    textAlign: "center",
    fontFamily: "semibold",
    fontSize: 16,
    color: COLORS.primary,
  },
  profileContainer: {
    alignItems: "center",
    gap: 20
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
  borderColor: '#fff', 
  },
  profileName: {
    fontFamily: "semibold",
    fontSize: 18,
    color: COLORS.primary,
    maxWidth: 200,
  },
  listContainer: {
    flexDirection: "column",
    paddingHorizontal: 20,
  }
});

export default styles;
