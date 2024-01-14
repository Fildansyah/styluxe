import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        marginTop: SIZES.medium,
        marginBottom: -SIZES.xSmall,
        paddingHorizontal: 12
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerTitle: {
        fontFamily: 'semibold',
        fontSize: SIZES.xLarge,
        
    }
})

export default styles