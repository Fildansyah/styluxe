import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/index";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperRow: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    position: "absolute",
    top: SIZES.small,
    flexDirection: "row",
    justifyContent: "space-between",
    top: SIZES.xLarge,
    width: SIZES.width,
    zIndex: 999,
  },
  image: {
    aspectRatio: 1,
    resizeMode: "cover",
  },
  heartContainer: {
    padding: 2,
    backgroundColor: COLORS.secondary,
    borderRadius: 100,
  },
  details: {
    marginTop: -SIZES.large,
    backgroundColor: COLORS.lightWhite,
    width: SIZES.width,
    borderTopLeftRadius: SIZES.medium,
    borderTopRightRadius: SIZES.medium,
    gap: SIZES.large,
    flex: 1,
  },
  titleRow: {
    marginHorizontal: 20,
    paddingBottom: SIZES.small,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: SIZES.width - 44,
    top: 20,
    gap: 10,
  },
  title: {
    fontFamily: "bold",
    fontSize: SIZES.large,
    maxWidth: "70%",
    textAlign: "justify",
  },
  priceWrapper: {
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.large,
  },
  price: {
    paddingHorizontal: 10,
    fontFamily: "semibold",
    fontSize: SIZES.large,
  },
  ratingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: SIZES.width - 10,
  },
  rating: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginHorizontal: SIZES.large,
    gap: 4,
  },
  counter: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginHorizontal: SIZES.large,
    gap: 10,
  },
  descriptionWrapper: {
    marginHorizontal: SIZES.large,
    flex: 1,
  },
  description: {
    fontFamily: "medium",
    fontSize: SIZES.large - 2,
  },
  descText: {
    fontFamily: "regular",
    fontSize: SIZES.small,
    textAlign: "justify",
    marginBottom: SIZES.small,
  },
  location: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.secondary,
    padding: 5,
    borderRadius: SIZES.large,
  },
  cartRow: {
    paddingBottom: SIZES.small,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: SIZES.width,
  },
  cartBtn: {
    width: SIZES.width * 0.7,
    backgroundColor: COLORS.black,
    padding: SIZES.small / 2,
    borderRadius: SIZES.large,
    marginLeft: 12,
  },
  cartTitle: {
    paddingHorizontal: SIZES.small,
    fontFamily: "bold",
    fontSize: SIZES.medium,
    color: COLORS.lightWhite,
  },
  addCart: {
    width: 37,
    height: 37,
    borderRadius: 50,
    margin: SIZES.small,
    backgroundColor: COLORS.black,
    alignItems: "center",
    justifyContent: "center",
  },
  sizeContainer: {
    marginHorizontal: SIZES.large,
  },
  sizeTitle: {
    fontFamily: "medium",
    fontSize: SIZES.medium,
  },
  sizeSelection: {
    flexDirection: "row",
    gap: 5,
  },
  size: {
    width: 30,
    height: 30,
    borderRadius: 5,
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.primary
  },
  size_selected: {
    backgroundColor: COLORS.primary,
    width: 30,
    height: 30,
    borderRadius: 5,
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.primary
  },
  sizeText: {
    fontFamily: "medium",
    fontSize: SIZES.medium,
    color: COLORS.primary,
  },
  sizeText_selected: {
    fontFamily: "medium",
    fontSize: SIZES.medium,
    color: COLORS.white,
  },
});

export default styles;
