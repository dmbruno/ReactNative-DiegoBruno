import { FlatList, View, StyleSheet } from 'react-native'
import { useGetProductsByCategoryQuery } from '../app/services/shop'
import { useEffect, useState } from 'react'
import ProductCategory from '../Components/ProductCategory'
import Search from '../Components/Search'
import colors from '../utils/Global/Colors'


const ProductsByCategory = ({ navigation, route }) => {

  const { categorySelected } = route.params
  const { data: products, isLoading } = useGetProductsByCategoryQuery(categorySelected)
  const [productsFiltered, setProductsFiltered] = useState([])
  const [keyword, setKeyword] = useState("")


  const handleKeyWord = (k) => {
    setKeyword(k)
  }

  useEffect(() => {
    setProductsFiltered(products)
    if (keyword) setProductsFiltered(products.filter(product => {
      const productTitleLower = product.title.toLowerCase()
      const keyWordLower = keyword.toLowerCase()
      return productTitleLower.includes(keyWordLower)
    }))
  }, [categorySelected, keyword, products])

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
  container:{
    flex:1,
    backgroundColor:colors.headeryfooter
  }
})