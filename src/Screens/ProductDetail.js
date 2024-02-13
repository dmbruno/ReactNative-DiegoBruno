import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import products from "../utils/data/products.json"
import { useEffect, useState } from 'react';
import Header from "../Components/Header"
import colors from "../utils/Global/Colors"
import Fonts from '../utils/Global/fonts';



const ProductDetail = ({ productId, portrait }) => {
    const [product, setProduct] = useState({})


    useEffect(() => {
        const productFinded = products.find(product => product.id === productId)
        setProduct(productFinded)

    }, [productId])

    return (
        <View style={styles.container}>
            <Header title="Detalle de producto" />
            <View style={[styles.content, !portrait && { flexDirection: "row", gap:10 }]}>
                <Image
                    style={[styles.image, !portrait && { height: 180, width: "50%" }]}
                    source={{ uri: product.thumbnail }}
                    resizeMode="cover"
                />
                <View>
                    <View style={[styles.containerText,!portrait && {width:"60%"}]}>
                        <Text style={styles.title}>{product.title}</Text>
                        <Text>{product.description}</Text>
                    </View>
                    <View style={[styles.containerText2,!portrait&&{width:"60%"}]}>

                        <Text style={styles.price}>$ {product.price}</Text>
                        <Pressable>
                            <Text style={styles.buyNow}>Buy Now</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ProductDetail

const styles = StyleSheet.create({

    content: {
        width: "100%",

    },
    image: {
        width: "100%",
        height: 300,

    },
    containerText: {
        gap: 25,
        paddingHorizontal: 5,
        paddingVertical: 25
    },
    containerText2: {
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        fontFamily: Fonts.ProtestRiotRegular
    },
    price: {
        fontSize: 30
    },
    buyNow: {
        color: "white",
        backgroundColor: colors.green1,
        paddingVertical: 5,
        paddingHorizontal: 15,
        fontFamily: Fonts.ProtestRiotRegular

    }

})