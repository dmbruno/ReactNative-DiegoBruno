import Home from '../../Screens/Home';
import ProductsByCategory from "../../Screens/ProductsByCategory"
import ProductDetail from "../../Screens/ProductDetail"
import Header from '../../Components/Header'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const ShopStack = () => {
    return (
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
    )
}

export default ShopStack