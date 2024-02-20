import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 5,
      gap: 10,
    },
    searchContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.medium,
        marginVertical: SIZES.large +5,
        height: 50,
        width: '90%',
      },
      searchIcon: {
        marginHorizontal: 10,
        color: COLORS.gray,
      },
      searchWrapper: {
        flex: 1,
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.small,
      },
      searchInput : {
        fontFamily: "regular",
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
})

export default styles