import { StyleSheet, View, FlatList } from 'react-native'
import CardCategory from './CardCategory'
import { useGetCategoriesQuery } from '../app/services/shop'
import colors from '../utils/Global/Colors'

const Categories = ({navigation}) => {
    
    const {data:categories} = useGetCategoriesQuery()

    return (
        <View style={styles.container}>
            <FlatList
                data={categories}
                keyExtractor={item => item}
                renderItem={({ item }) => <CardCategory item={item} navigation={navigation} />}
            />
        </View>
    )
}

export default Categories

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.headeryfooter
    }
})