import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import Fonts from '../utils/Global/fonts'
import colors from '../utils/Global/Colors'
import CartItem from '../Components/CartItem'
import { useSelector, useDispatch } from 'react-redux'
import { usePostOrderMutation } from '../app/services/orders'
import { deleteCarrito } from "../features/Carrito/carritoSlice"



const Cart = ({navigation}) => {

    const dispatch = useDispatch()
    const carrito = useSelector((state) => state.carrito)
    const { items, total } = carrito
    const localId = useSelector((state) => state.auth.localId)
    const [triggerhanddleAddOrder] = usePostOrderMutation(localId)

    const handdleAddOrder = async () => {
        const createdAt = new Date().toLocaleString()
        const order = {
            createdAt,
            ...carrito
        }
        await triggerhanddleAddOrder({ localId, order })
        dispatch(deleteCarrito())
        navigation.navigate("OrderStack")
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={items}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <CartItem item={item} />}
            />
            <View style={styles.confirmContainer}>
                <Pressable onPress={handdleAddOrder}>
                    <Text style={styles.confirmText}>Confirmar</Text>
                </Pressable>
                <Text style={styles.confirmText}>Total: $ {total}</Text>
            </View>

        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        backgroundColor:colors.headeryfooter

    },
    confirmContainer: {
        flexDirection: "row",
        borderWidth: 2,
        borderRadius: 10,
        borderColor:colors.Letras,
        padding: 25,
        justifyContent: "space-between",
        bottom: 130,
        marginHorizontal:10

    },
    confirmText: {
        fontFamily: Fonts.ProtestRiotRegular,
        fontSize: 22,
        color:colors.Letras
    }

})