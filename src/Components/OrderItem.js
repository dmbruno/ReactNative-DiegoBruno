import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Feather } from "@expo/vector-icons"
import Fonts from '../utils/Global/fonts'
import colors from '../utils/Global/Colors'


const OrderItem = ({ order }) => {
    

    return (
        <View style={styles.card}>
            <View style={styles.textContainer}>
                <Text style={styles.id}>Id de compra:{order.id}</Text>
                <Text style={styles.text}>{order.createdAt}</Text>
                <Text style={styles.text2}>$ {order.total}</Text>
            </View>
            <Pressable>
                <Feather name="trash" size={30} color="black" />
            </Pressable>
        </View>
    )
}

export default OrderItem

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.ordenes,
        borderWidth: 2,
        margin: 10,
        padding: 10,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent:"space-between",
        height: 100,
        alignItems: "center"

    },
    id:{
        marginBottom:10
    },
    textContainer: {
        width: "70%",
        
    },
    text: {
        marginTop:3,
        fontSize: 17,
        fontFamily: Fonts.JosefinSansBold
    },
    text2: {
        marginTop:5,
        fontSize: 19,
        fontFamily: Fonts.JosefinSansBold,
        color: "white"
    }

})