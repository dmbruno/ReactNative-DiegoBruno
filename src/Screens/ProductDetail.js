import { StyleSheet, Text, View, Image } from 'react-native';
import colors from "../utils/Global/Colors";
import Fonts from '../utils/Global/fonts';
import Contador from '../Components/Contador';
import { useGetProductQuery } from '../app/services/shop';

const ProductDetail = ({ route }) => {

    const { productId } = route.params;
    const { data: product, isLoading } = useGetProductQuery(productId)

    if (isLoading) return <View><Text>cargando...</Text></View>


    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{ uri: product.thumbnail }}
                    resizeMode="cover"
                />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.description}>{product.description}</Text>
                <View style={styles.priceContainer}>
                    <Text style={styles.price}>$ {product.price}</Text>
                    <Contador product={product} />
                </View>
            </View>
        </View>
    );
};

export default ProductDetail;

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        flex: 1,
        backgroundColor: colors.headeryfooter,
        paddingBottom:60
    },
    imageContainer: {
        flex: 0.5,
    },
    image: {
        width: "100%",
        height: "100%",
    },
    textContainer: {
        flex: 0.5,
        paddingHorizontal: 10,
        paddingVertical: 25,
        justifyContent: "space-between",
        alignItems: "center"
    },
    priceContainer: {
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 200
    },
    title: {
        fontSize: 35,
        color: colors.Letras,
        fontWeight: "bold",
        fontFamily: Fonts.ProtestRiotRegular,
    },
    price: {
        color: colors.Letras,
        fontSize: 25,
        fontWeight: "bold",
        marginBottom: 1,
        padding: 10
    },
    buyNow: {
        textAlign: "center",
        color: "white",
        backgroundColor: colors.green1,
        paddingVertical: 5,
        paddingHorizontal: 15,
        fontFamily: Fonts.ProtestRiotRegular,
    },
    description: {
        fontSize: 18,
        textAlign: "center",
        fontStyle: "italic",
        color: "white",
        margin: 5

    }
});
