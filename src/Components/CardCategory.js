import { Pressable, StyleSheet, Text } from 'react-native'
import ShadowPrimary from './wrappers/ShadowPrimary'
import colors from "../utils/Global/Colors"
import Fonts from '../utils/Global/fonts'




const CardCategory = ({ item, navigation }) => {
    return (
        <Pressable onPress={()=> navigation.navigate("ProductsByCategory",{categorySelected:item})}>
            <ShadowPrimary style={styles.container}>
                <Text style={styles.text}>{item}</Text>
            </ShadowPrimary>
        </Pressable>
    )
}

export default CardCategory

const styles = StyleSheet.create({
    container: {
        width: "80%",
        backgroundColor: colors.headeryfooter,
        marginHorizontal: "10%",
        marginVertical: 10,
        padding:20,
        alignItems: "center",

    },
    text: {
        fontSize: 25,
        fontFamily: Fonts.ProtestRiotRegular,
        color:colors.Letras

    }
})