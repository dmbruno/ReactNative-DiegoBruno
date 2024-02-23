import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import Fonts from '../utils/Global/fonts'
import colors from '../utils/Global/Colors'
import CartItem from '../Components/CartItem'
import { useSelector } from 'react-redux'



const Cart = () => {

    const carrito = useSelector((state)=>state.carrito)
    const { items, total } = carrito


    return (
        <View style={styles.container}>
            <FlatList
                data={items}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => <CartItem item={item}/>}
            />
            <View style={styles.confirmContainer}>
                <Pressable>
                    <Text style={styles.confirmText}>Confirmar</Text>
                </Pressable>
                <Text style={styles.confirmText}>Total: $ {total}</Text>
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
        backgroundColor:colors.green2,
        padding:25,
        justifyContent:"space-between",
        bottom:130
        
    },
    confirmText:{
        fontFamily: Fonts.ProtestRiotRegular,
        fontSize:18,
        color:"white"
    }

})