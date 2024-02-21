import { StyleSheet, Text, View } from 'react-native'
import {Entypo} from "@expo/vector-icons"
import colors from "../utils/Global/Colors"
import Fonts from '../utils/Global/fonts'


const CartItem = ({item}) => {
    return (
        <View style={styles.card}>
            <View style={styles.container}>
                <Text style={styles.text1}>{item.brand}</Text>
                <Text style={styles.text}>{item.title}</Text>
                <Text style={styles.text2}>{item.price}</Text>
            </View>
            <Entypo name="trash" size={30} color="white"/>
        </View>
    )
}

export default CartItem

const styles = StyleSheet.create({
    card:{
        backgroundColor: colors.green3,
        padding:20,
        margin:10,
        borderWidth:2,
        borderRadius:10,
        flexDirection:"row",
        justifyContent:"space-between",
        height:100,
        alignItems:"center"
    },
    container:{
        width:"70%",
        
    },
    text:{
        color: colors.lightGray,
        fontSize:19,
        fontFamily: Fonts.ProtestRiotRegular
    },
    text1:{
        color: colors.lightGray,
        fontSize:19,
        fontFamily: Fonts.JosefinSansBold
    },
    text2:{
        color: colors.lightGray,
        fontSize:19,
        fontFamily: Fonts.JosefinSansBold
    }
    
})