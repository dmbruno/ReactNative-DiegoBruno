import { StyleSheet, Text, View, Image } from 'react-native';
import colors from "../utils/Global/Colors";
import Fonts from '../utils/Global/fonts';
import Contador from '../Components/Contador';
import { useGetProductQuery } from '../app/services/shop';

const ProductDetail = ({ portrait, route }) => {
    
    const { productId } = route.params;
    const {data:product, isLoading} = useGetProductQuery(productId)
    
    if(isLoading) return <View><Text>cargando...</Text></View>


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
                    <Contador product={product}/>
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
        fontSize: 25,
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
