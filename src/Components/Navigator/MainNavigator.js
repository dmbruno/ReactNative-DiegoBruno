import ProductsByCategory from "../../Screens/ProductsByCategory"
import ProductDetail from "../../Screens/ProductDetail"
import Header from '../../Components/Header'
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../../Screens/Home';


const Stack = createNativeStackNavigator()

const MainNavigator = () => {


    return (
        <>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName='Home'
                    screenOptions={({ route, navigation }) => {
                        return {
                            header: () => {
                                return <Header

                                    navigation={navigation}
                                    title={route.name === "Home" ? "Menu Grizzly" :
                                        route.name === "ProductsByCategory" ? route.params.categorySelected :
                                            "Detalle De Producto"} />
                            }
                        }
                    }}
                >
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="ProductsByCategory" component={ProductsByCategory} />
                    <Stack.Screen name="ProductDetail" component={ProductDetail} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}

export default MainNavigator

