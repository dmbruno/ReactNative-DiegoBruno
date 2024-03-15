import { FlatList, View, StyleSheet, Text } from 'react-native'
import { useGetProductsByCategoryQuery } from '../app/services/shop'
import { useEffect, useState } from 'react'
import ProductCategory from '../Components/ProductCategory'
import Search from '../Components/Search'
import colors from '../utils/Global/Colors'
import LoadingSpinner from '../Components/LoadingSpinner'
import Error from '../Components/Error'
import EmptyListComponent from '../Components/EmptyListComponent'


const ProductsByCategory = ({ navigation, route }) => {



  const { categorySelected } = route.params
  const { data: products, isLoading, isError, isSuccess } = useGetProductsByCategoryQuery(categorySelected)
  const [productsFiltered, setProductsFiltered] = useState([])
  const [keyword, setKeyword] = useState("")

  useEffect(() => {
    setProductsFiltered(products)
    if (keyword) setProductsFiltered(products.filter(product => {
      const productTitleLower = product.title.toLowerCase()
      const keyWordLower = keyword.toLowerCase()
      return productTitleLower.includes(keyWordLower)
    }))
  }, [categorySelected, keyword, products])

  if (isLoading) return <LoadingSpinner />
  if (isError) return <Error message="Algo salio mal, volve a intentar" textButton="Volver" onRetry={() => navigation.goBack()} />
  if (isSuccess && products.length === 0) return <EmptyListComponent message="Sin productos de esta categoria" />

  const handleKeyWord = (k) => {
    setKeyword(k)
  }




  return (

    <>
      <Search handleKeyWord={handleKeyWord} />
      <View style={styles.container}>
        <FlatList
          data={productsFiltered}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <ProductCategory item={item} navigation={navigation} />}
        />
      </View>
    </>
  )
}

export default ProductsByCategory

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.headeryfooter
  }
})