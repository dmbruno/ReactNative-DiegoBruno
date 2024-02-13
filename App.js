
import { SafeAreaView, StyleSheet, useWindowDimensions } from 'react-native';
import Home from './src/Screens/Home';
import { useEffect, useState } from 'react';
import ProductsByCategory from "./src/Screens/ProductsByCategory"
import { useFonts } from "expo-font"
import { fontsCollection } from './src/utils/Global/fonts';
import ProductDetail from './src/Screens/ProductDetail';
import { StatusBar } from 'expo-status-bar';
import colors from './src/utils/Global/Colors';


export default function App() {

  const [fontsLoaded] = useFonts(fontsCollection)
  const [categorySelected, setCategorySeleted] = useState("")
  const [productId, setProductId] = useState(0)
  const { width, height } = useWindowDimensions()
  const [portrait, setPortrait] = useState(true)

  useEffect(() => {
    if (width > height) setPortrait(false)
    else setPortrait(true)

  }, [width, height])


  if (!fontsLoaded) return null

  const selectedCategoryState = (category) => {
    setCategorySeleted(category)
  }

  const selectedProductId = (id) => {
    setProductId(id)
  }

  return (
    <>
      <StatusBar backgroundColor={colors.green2} />
      <SafeAreaView>
        {categorySelected ?
          productId ?
            <ProductDetail 
            productId={productId} 
            portrait={portrait}
            />
            :
            <ProductsByCategory
              selectedProductId={selectedProductId}
              categorySelected={categorySelected} />
          :
          <Home selectedCategoryState={selectedCategoryState} />}

      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({

});
