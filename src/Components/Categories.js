import { StyleSheet, View, FlatList, Text } from 'react-native'
import CardCategory from './CardCategory'
import { useGetCategoriesQuery } from '../app/services/shop'
import LoadingSpinner from './LoadingSpinner'
import Error from '../Components/Error'
import EmptyListComponent from './EmptyListComponent'


const Categories = ({ navigation }) => {

    const { data: categories, isLoading, isError, isSuccess } = useGetCategoriesQuery()

    const onRetry = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }],
        })
    }

    if (isLoading) return <LoadingSpinner />
    if (isError) return <Error message="Algo salio mal, volve a intentar" textButton="Recargar" onRetry={onRetry} />
    if (isSuccess && categories === null) return <EmptyListComponent message="Sin categorias" />

    return (
        <View style={styles.container}>
            <FlatList
                data={categories}
                keyExtractor={item => item.title}
                renderItem={({ item }) => <CardCategory item={item} navigation={navigation} />}
            />
        </View>
    )
}

export default Categories

const styles = StyleSheet.create({})