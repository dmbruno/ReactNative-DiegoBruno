import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Entypo } from "@expo/vector-icons"
import colors from "../utils/Global/Colors"
import Fonts from '../utils/Global/fonts'
import { deleteCartItem } from '../features/Carrito/carritoSlice'
import { useDispatch } from 'react-redux'


const CartItem = ({ item }) => {

    const dispatch = useDispatch()

    return (
        <View style={styles.card}>
            <View style={styles.container}>
                <Text style={styles.text1}>{item.brand}</Text>
                <Text style={styles.text}>{item.title}</Text>
                <Text style={styles.text2}>Total: ${item.price}</Text>
                <Text style={styles.text2}>Cantidad: {item.quantity}</Text>
            </View>
            <Pressable onPress={()=> dispatch(deleteCartItem(item.id))}>
                <Entypo name="trash" size={30} color="white" />
            </Pressable>
        </View>
    )
}

export default CartItem

const styles = StyleSheet.create({
    card: {
        marginVertical:5,
        marginHorizontal:10,
        borderWidth: 2,
        borderRadius: 10,
        borderColor:colors.Letras,
        flexDirection: "row",
        justifyContent: "space-evenly",
        height: 100,
        alignItems: "center"
    },
    container: {
        width: "70%",
        height:"100%",
        gap:5,
        marginBottom:10

    },
    text: {
        color: colors.lightGray,
        fontSize: 19,
        fontFamily: Fonts.ProtestRiotRegular
    },
    text1: {
        color: colors.lightGray,
        fontSize: 19,
        fontFamily: Fonts.JosefinSansBold
    },
    text2: {
        color: colors.lightGray,
        fontSize: 19,
        fontFamily: Fonts.JosefinSansBold
    }

})