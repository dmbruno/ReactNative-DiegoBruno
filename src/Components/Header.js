import { StyleSheet, Text, View } from 'react-native'
import colors from "../utils/Global/Colors"
import Fonts from '../utils/Global/fonts'


const Header = ({title}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.green2,
        height:120,
        width:"100%",
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
        fontSize:30,
        fontFamily:Fonts.ProtestRiotRegular
    }
})