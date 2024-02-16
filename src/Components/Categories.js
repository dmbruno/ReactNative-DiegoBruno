import { StyleSheet, View, FlatList } from 'react-native'
import categories from "../utils/data/categories.json"
import CardCategory from './CardCategory'

const Categories = ({navigation}) => {
    return (
        <View>
            <FlatList
                data={categories}
                keyExtractor={item => item}
                renderItem={({ item }) => <CardCategory item={item} navigation={navigation} />}
            />
        </View>
    )
}

export default Categories

const styles = StyleSheet.create({})