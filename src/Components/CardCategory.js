import { ImageBackground, Pressable, StyleSheet, Text } from 'react-native'
import ShadowPrimary from './wrappers/ShadowPrimary'
import colors from "../utils/Global/Colors"
import Fonts from '../utils/Global/fonts'




const CardCategory = ({ item, navigation }) => {
    return (
        <Pressable onPress={() => navigation.navigate("ProductsByCategory", { categorySelected: item.title })}>
            <ShadowPrimary style={styles.container}>
                <ImageBackground source={{uri: item.thumbnail}} style={styles.background}>
                    <Text style={styles.text}>{item.title}</Text>
                </ImageBackground>
            </ShadowPrimary>
        </Pressable>
    )
}

export default CardCategory

const styles = StyleSheet.create({
    container: {
        width:"95%",
        height:100,
        backgroundColor: colors.headeryfooter,
        marginHorizontal:"10%",
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius:10,
        overflow:"hidden",
        borderWidth:"3"
    },
    background:{
        width:"100%",
        height:"100%",
        resizeMode:"cover",
        alignItems:"center",
        justifyContent:"center"
    },
    text: {
        fontSize: 40,
        fontFamily: Fonts.ProtestRiotRegular,
        color: "white",   
    }
})