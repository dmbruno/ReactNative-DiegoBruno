import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Entypo } from "@expo/vector-icons"
import colors from "../utils/Global/Colors"
import Fonts from '../utils/Global/fonts'
import { deleteCartItem } from '../features/Carrito/carritoSlice'
import { useDispatch } from 'react-redux'
import { useState } from 'react'


const CartItem = ({ item }) => {

    const dispatch = useDispatch()

    const [modalVisible, setModalVisible] = useState(false)

    const closeModal = () => {
        setModalVisible(false)
    }

    const handleTrash = () => {
        setModalVisible(true)

    }

    const confirmDelete = () => {
        dispatch(deleteCartItem(item.id))
    }

    return (
        <View style={styles.card}>
            <View style={styles.container}>
                <Text style={styles.text1}>{item.brand}</Text>
                <Text style={styles.text}>{item.title}</Text>
                <Text style={styles.text2}>Total: ${item.price}</Text>
                <Text style={styles.text2}>Cantidad: {item.quantity}</Text>
            </View>
            <Pressable onPress={handleTrash}>
                <Entypo name="trash" size={30} color="white" />
            </Pressable>
            {modalVisible && (
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>Seguro quieres eliminar el pedido?</Text>
                        <View style={styles.containerPres}>
                            <Pressable style={[styles.button, styles.confirmButton]} onPress={confirmDelete}>
                                <Text style={styles.buttonText}>Si</Text>
                            </Pressable>
                            <Pressable style={[styles.button, styles.cancelButton]} onPress={closeModal}>
                                <Text style={styles.buttonText} >No</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            )}
        </View>
    )
}

export default CartItem

const styles = StyleSheet.create({
    containerPres: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",

    },
    modalContainer: {
        position: "absolute",
        width: "100%",
        height: "100%",
        borderRadius: 25,
        paddingRight: 25,



    },
    modalContent: {
        position:'absolute',
        height:"100%",
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent:"center",
        marginRight:20

    },
    card: {
        marginVertical: 5,
        marginHorizontal: 10,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: colors.Letras,
        flexDirection: "row",
        justifyContent: "space-evenly",
        height: 100,
        alignItems: "center"
    },
    container: {
        width: "70%",
        height: "100%",
        gap: 5,
        marginBottom: 10

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
    },
    modalText: {
        fontSize: 18,
        marginBottom: 20,
        marginTop:10
    },
    button: {
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    confirmButton: {
        backgroundColor: colors.success,
    },
    cancelButton: {
        backgroundColor: colors.danger,
    },
    buttonText: {
        color: colors.white,
        fontSize: 18,
        fontFamily: Fonts.JosefinSansRegular,
    },


})