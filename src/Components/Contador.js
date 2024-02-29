import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import { useDispatch } from 'react-redux';
import { addCartItem } from '../features/Carrito/carritoSlice';
import colors from '../utils/Global/Colors';

const Contador = ({ product }) => {

    const dispatch = useDispatch()
    const [contador, setContador] = useState(1);

    const handleSuma = () => {
        setContador(contador + 1);
    };

    const handleResta = () => {
        if (contador > 0)
            setContador(contador - 1);
    };

    const handleComprar = (product) => {
        dispatch(addCartItem({ ...product, quantity: contador}))
        setContador(1)
    }

    return (
        <View style={styles.container}>
            <View style={styles.contador}>
                <Button
                    title="+"
                    onPress={handleSuma}
                    style={styles.button}
                />
                <Text style={styles.counterText}>{contador}</Text>
                <Button
                    title="-"
                    onPress={handleResta}
                    style={styles.button}
                />
            </View>
            <Pressable onPress={() => handleComprar(product)}>
                <Text style={styles.buyNow}>
                    Confirmar
                </Text>
            </Pressable>
        </View>
    );
};

export default Contador;

const styles = StyleSheet.create({
    contador: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center"
    },
    container: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        
        paddingHorizontal: 25,
    },
    button: {
        backgroundColor: '#007BFF',
        color: 'white',
        paddingHorizontal: 20,
        justifyContent: "center"
    },
    counterText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    buyNow: {
        top: 15,
        backgroundColor: colors.green2,
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        fontWeight:"bold"
    }
});
