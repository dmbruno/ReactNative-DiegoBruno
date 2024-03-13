import { useWindowDimensions } from 'react-native';
import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import colors from './src/utils/Global/Colors';
import { useFonts } from "expo-font"
import { fontsCollection } from './src/utils/Global/fonts';
import MainNavigator from './src/Components/Navigator/MainNavigator';
import { store } from './src/app/store'
import { Provider } from 'react-redux'
import {init} from "./src/utils/db"

init()


export default function App() {

  

  const [fontsLoaded] = useFonts(fontsCollection)
  const { width, height } = useWindowDimensions()
  const [portrait, setPortrait] = useState(true)

  


  useEffect(() => {
    if (width > height) setPortrait(false)
    else setPortrait(true)

  }, [width, height])


  if (!fontsLoaded) return null



  return (
    <>
      <StatusBar backgroundColor={colors.green2} />
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    </>
  );
}

