import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    padding: 20,
    alignItems: "center",
  },
  titleContainer: { 
    flex: 1, 
    alignItems: "center" 
},
  title: {
    fontSize: 20,
    fontWeight: "bold",
    flex: 1,
    alignItems: "center",
  },
  listContainer:{
    flex: 1,
    paddingHorizontal: 5,
    paddingVertical: 10,
    backgroundColor: COLORS.lightGray
  }
});

export default styles;
