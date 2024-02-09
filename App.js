
import { StyleSheet } from 'react-native';
import Home from './src/Screens/Home';
import { useState } from 'react';
import ProductsByCategory from "./src/Screens/ProductsByCategory"
import { useFonts } from "expo-font"
import { fontsCollection } from './src/utils/Global/fonts';


export default function App() {

  const [fontsLoaded] = useFonts(fontsCollection)

  const [categorySelected, setCategorySeleted] = useState("")

  if(!fontsLoaded) return null
  
  const selectedCategoryState = (category) => {
    setCategorySeleted(category)
  }


  return (
    <>
      {categorySelected ?
        <ProductsByCategory categorySelected={categorySelected} />
        :
        <Home selectedCategoryState={selectedCategoryState} />}
    </>
  );
}

const styles = StyleSheet.create({});
