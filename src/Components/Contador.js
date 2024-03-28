import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Pressable, ActivityIndicator } from 'react-native';
import { useDispatch } from 'react-redux';
import { addCartItem } from '../features/Carrito/carritoSlice';
import colors from '../utils/Global/Colors';

const Contador = ({ product }) => {

    const [isconfirming, setIsConfirming] = useState(false)

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
        setIsConfirming(true)

        setTimeout(() => {
            dispatch(addCartItem({ ...product, quantity: contador }));
            setContador(1);
            setIsConfirming(false);
        }, 300); 
    }

    return (
        <View style={styles.container}>
            <View style={styles.contador}>
                <Button
                    title="+"
                    onPress={handleSuma}
                    style={styles.button}
                    color="#F6C90E"
                />
                <Text style={styles.counterText}>{contador}</Text>
                <Button
                    title="-"
                    onPress={handleResta}
                    style={styles.button}
                    color="#F6C90E"
                />
            </View>
            {isconfirming ?
                <ActivityIndicator color={colors.Letras} />
                :
                <Pressable onPress={() => handleComprar(product)}>
                    <Text style={styles.buyNow}>
                        Confirmar
                    </Text>
                </Pressable>}

        </View>
    );
};

export default Contador;

const styles = StyleSheet.create({
    contador: {
        flexDirection: "row",
        width: "50%",
        justifyContent: "space-between",
        alignItems: "center",
    },
    container: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 25,
    },
    button: {
        paddingHorizontal: 20,
        justifyContent: "center",
        fontWeight: "bold"

    },
    counterText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.Letras
    },
    buyNow: {
        top: 15,
        color: colors.Letras,
        backgroundColor: colors.NegroFondo,
        paddingHorizontal: 40,
        paddingVertical: 10,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        fontWeight: "bold",
        borderWidth: 3,
        borderColor: "#F6C90E",

    }
});
