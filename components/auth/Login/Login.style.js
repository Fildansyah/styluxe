import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: "bold",
  },
  input_container: {
    paddingTop: 32,
    display: "flex",
    flexDirection: "column",
    gap: 8,
    width: "100%",
  },
  input_email: {
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    fontFamily: "bold",
  },
  password_container: {
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:'center'
  },
  input_password: {
    fontFamily: "bold",
    width: "90%",
  }
});

export default styles;
