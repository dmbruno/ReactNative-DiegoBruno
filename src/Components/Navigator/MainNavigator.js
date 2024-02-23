import { NavigationContainer } from "@react-navigation/native"
import ShopStack from "../Navigator/ShopStack"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CartStack from "./CartStack";
import OrderStack from "./OrderStack";
import { StyleSheet } from "react-native";
import colors from "../../utils/Global/Colors"
import TabBarIcon from "../TabBarIcon";

const Tab = createBottomTabNavigator();

const MainNavigator = () => {

    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="ShopStack"
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarHideOnKeyboard: true,
                    tabBarStyle: styles.tabBar,
                }}
            >
                <Tab.Screen
                    name="ShopStack"
                    component={ShopStack}
                    options={{
                        tabBarIcon: ({ focused }) => <TabBarIcon title="Categorias" nameIcon="menu" focused={focused} />
                    }}
                />
                <Tab.Screen
                    name="OrderStack"
                    component={OrderStack}
                    options={{
                        tabBarIcon: ({ focused }) => <TabBarIcon title="Ordenes" nameIcon="text-document-inverted" focused={focused} />
                    }}
                />
                    <Tab.Screen
                        name="CartStack"
                        component={CartStack}
                        options={{
                            tabBarIcon: ({ focused }) => <TabBarIcon title="Carrito" nameIcon="shopping-cart" focused={focused} />
                        }}
                    />

            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigator

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: colors.green2,
        position: "absolute",
        height: 90,
        bottom: 25,
        left: 20,
        right: 20,
        elevation: 4,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,


    }
})