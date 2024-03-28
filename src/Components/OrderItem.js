import { Pressable, StyleSheet, Text, View, Ima } from 'react-native'
import { Feather } from "@expo/vector-icons"
import Fonts from '../utils/Global/fonts'
import colors from '../utils/Global/Colors'
import { useState } from 'react'




const OrderItem = ({ order }) => {

    const [modalVisible, setModalVisible] = useState(false)
    const handlePress = () => {
        setModalVisible(true)
    }
    const closeModal = () => {
        setModalVisible(false)
    }

    return (
        <View style={styles.card}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{order.createdAt}</Text>

                <Text style={styles.text2}>$ {order.total}</Text>
            </View>
            <Pressable onPress={handlePress}>
                <Feather name="more-vertical" size={30} color="black" />
            </Pressable>
            {modalVisible && (
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.id}>Id de compra:{order.id}</Text>
                        <Text style={styles.text}>Categoria: {order.items[0].category}</Text>
                        <Text style={styles.text}>Descripcion: {order.items[0].description}</Text>
                        <Text style={styles.text}>Total ARS: {order.total}</Text>
                        <Pressable style={styles.pressable} onPress={closeModal}>
                            <Text style={styles.text}>Cerrar</Text>
                        </Pressable>
                    </View>
                </View>
            )}
        </View>
    );
};

export default OrderItem

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.ordenes,
        borderWidth: 2,
        margin: 10,
        padding: 10,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        height: 100,
        alignItems: "center"

    },
    id: {
        marginBottom: 5,
        
    },
    textContainer: {
        width: "70%",

    },
    text: {
        marginTop: 2,
        fontSize: 12,
        fontFamily: Fonts.JosefinSansBold,
        marginBottom:5
    },
    text2: {
        marginTop: 5,
        fontSize: 19,
        fontFamily: Fonts.JosefinSansBold,
        color: "white"
    },
    modalContainer: {
        position: "absolute",
        width: "100%",
        flex: 1,
        marginLeft: 11,
        justifyContent: 'center',
        alignItems: 'center',

    },
    modalContent: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        alignItems: 'left',
    },
    pressable: {
        paddingHorizontal: 20,
        backgroundColor: "orange",
        alignSelf: "center",
        marginVertical: 5,
        borderRadius: 15,
        paddingVertical: 5
    }

})