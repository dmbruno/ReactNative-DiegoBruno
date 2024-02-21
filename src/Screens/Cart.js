import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import cart from "../utils/data/cart.json"
import Fonts from '../utils/Global/fonts'
import colors from '../utils/Global/Colors'
import CartItem from '../Components/CartItem'

const Cart = () => {
    return (
        <View styles={styles.container}>
            <FlatList
                data={cart.item}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => <CartItem item={item}/>}
            />
            <View style={styles.confirmContainer}>
                <Pressable>
                    <Text style={styles.confirmText}>Confirmar</Text>
                </Pressable>
                <Text style={styles.confirmText}>Total: $ {cart.total}</Text>
            </View>

        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"space-between",
        
    },
    confirmContainer:{
        flexDirection:"row",
        backgroundColor:"gay",
        padding:25,
        justifyContent:"space-between"
    },
    confirmText:{
        fontFamily: Fonts.ProtestRiotRegular,
        fontSize:18,
        color:colors.green3
    }

})