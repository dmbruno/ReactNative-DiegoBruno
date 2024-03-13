import { StyleSheet, Text, Image, Pressable } from 'react-native'
import colors from '../utils/Global/Colors'



const ProductCategory = ({ item, navigation }) => {
    return (
        <Pressable onPress={() => navigation.navigate("ProductDetail", { productId: item.id -1 })} style={styles.container}>
            <Image style={styles.image} source={{ uri: item.thumbnail }} resizeMode='stretch' />
            <Text style={styles.text}>{item.title}</Text>
        </Pressable>
    )
}


export default ProductCategory

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.headeryfooter,
        borderColor: colors.Letras,
        borderWidth: 3,
        borderRadius: 5,
        padding: 10,
        margin: 5,
        width: "80%",
        marginHorizontal: "10%",
        padding: 10,
        marginVertical: 10,
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent:"space-between",
        gap: 10
    },
    text: {
        width: "60%",
        fontSize: 16,
        color:colors.Letras,
        fontWeight:"bold"

    },
    image: {
        width: 100,
        height: 90,
        borderRadius: 5
    }
})