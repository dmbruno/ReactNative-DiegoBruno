import { FlatList, View, Text } from 'react-native'
import Header from '../Components/Header'
import products from "../utils/data/products.json"
import { useEffect, useState } from 'react'
import ProductCategory from '../Components/ProductCategory'
import Search from '../Components/Search'


const ProductsByCategory = ({ categorySelected, selectedProductId }) => {

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
      <Header title={categorySelected} />
      <Search handleKeyWord={handleKeyWord} />
      <FlatList
        data={productsFiltered}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ProductCategory selectedProductId={selectedProductId} item={item} />}
      />
    </>
  )
}

export default ProductsByCategory