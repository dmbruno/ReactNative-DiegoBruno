import { StyleSheet, FlatList, View } from 'react-native'
import OrderItem from '../Components/OrderItem'
import { useSelector } from 'react-redux'
import { useGetOrdersQuery } from '../app/services/orders'
import colors from '../utils/Global/Colors'




const Orders = () => {

    const localId = useSelector((state) => state.auth.localId)
    const { data: orders } = useGetOrdersQuery(localId)


    if (!orders) {
        return null
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={orders}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <OrderItem order={item} />}
            />
        </View>
    )
}

export default Orders

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.headeryfooter,
        flex:1
        
    }
})
