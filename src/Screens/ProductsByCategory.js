import { FlatList } from 'react-native'
import products from "../utils/data/products.json"
import { useEffect, useState } from 'react'
import ProductCategory from '../Components/ProductCategory'
import Search from '../Components/Search'


const ProductsByCategory = ({navigation, route }) => {
  const {categorySelected} = route.params

  const [productsFiltered, setProductsFiltered] = useState([])
  const [keyword, setKeyword] = useState("")

  const handleKeyWord = (k) => {
    setKeyword(k)
  }

  useEffect(() => {
    if (categorySelected) setProductsFiltered(products.filter(product => product.category === categorySelected))
    if (keyword) setProductsFiltered(productsFiltered.filter(product => {
      const productTitleLower = product.title.toLowerCase() 
      const keyWordLower = keyword.toLowerCase()
      return productTitleLower.includes(keyWordLower) 
    }))
  }, [categorySelected, keyword])

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