import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import products from "../utils/data/products.json";
import { useEffect, useState } from 'react';
import colors from "../utils/Global/Colors";
import Fonts from '../utils/Global/fonts';
import { addCartItem } from '../features/Carrito/carritoSlice';
import { useDispatch } from 'react-redux';

const ProductDetail = ({ portrait, route }) => {
    const dispatch = useDispatch();
    const { productId } = route.params;
    const [product, setProduct] = useState({});

    useEffect(() => {
        const productFinded = products.find(product => product.id === productId);
        setProduct(productFinded);
    }, [productId]);

    return (
        <View style={[styles.container, !portrait ? styles.landscapeContainer : null]}>
            <View style={[styles.imageContainer, !portrait ? styles.landscapeImageContainer : null]}>
                <Image
                    style={[styles.image, !portrait ? styles.landscapeImage : null]}
                    source={{ uri: product.thumbnail }}
                    resizeMode="cover"
                />
            </View>
            <View style={[styles.textContainer, !portrait ? styles.landscapeTextContainer : null]}>
                <Text style={styles.title}>{product.title}</Text>
                <Text>{product.description}</Text>
                <View style={styles.priceContainer}>
                    <Text style={styles.price}>$ {product.price}</Text>
                    <Pressable onPress={() => dispatch(addCartItem(product))}>
                        <Text style={styles.buyNow}>Comprar</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

export default ProductDetail;

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
    },
    landscapeContainer: {
        flexDirection: "row",
        gap: 10,
    },
    imageContainer: {
        flex: 1,
    },
    landscapeImageContainer: {
        flex: 1,
        width: "50%",
    },
    image: {
        width: "100%",
        height: "100%",
    },
    landscapeImage: {
        height: 180,
    },
    textContainer: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 25,
        justifyContent: "space-between",
    },
    landscapeTextContainer: {
        width: "50%",
    },
    priceContainer: {
        gap:15,
        flexDirection: "column",
        justifyContent: "space-between",
    },
    title: {
        padding:10,
        fontSize: 20,
        fontWeight: "bold",
        fontFamily: Fonts.ProtestRiotRegular,
    },
    price: {

        marginTop:10,
        fontSize: 20,
    },
    buyNow: {
        textAlign:"center",
        color: "white",
        backgroundColor: colors.green1,
        paddingVertical: 5,
        paddingHorizontal: 15,
        fontFamily: Fonts.ProtestRiotRegular,
    },
});
