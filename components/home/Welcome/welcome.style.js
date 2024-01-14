import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants";
const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "column",
    paddingHorizontal: 10
  },
  welcomeTxt: (color, size) => ({
    fontFamily: "bold",
    fontSize: size,
    color: color,
  }),
  searchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 12,
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.medium,
    marginVertical: SIZES.medium,
    height: 50
  },
  searchIcon: {
    marginHorizontal: 10,
    color: COLORS.gray,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    marginRight: SIZES.small,
    borderRadius: SIZES.small,
  },
  searchInput : {
    fontFamily: "regular",
    justifyContent: 'center',
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.small,
  },
  searchBtn: {
    width: 50,
    height: "100%",
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary
  }
});

export default styles;
