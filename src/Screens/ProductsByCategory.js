import { FlatList } from 'react-native'
import { useGetProductsByCategoryQuery } from '../app/services/shop'
import { useEffect, useState } from 'react'
import ProductCategory from '../Components/ProductCategory'
import Search from '../Components/Search'


const ProductsByCategory = ({navigation, route }) => {

  const {categorySelected} = route.params
  const {data:products, isLoading}= useGetProductsByCategoryQuery(categorySelected)
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
      <FlatList
        data={productsFiltered}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ProductCategory  item={item} navigation={navigation}/>}
      />
    </>
  )
}

export default ProductsByCategory