import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../Header'
import Login from '../../Screens/Login'
import Register from '../../Screens/Register'


const Stack = createNativeStackNavigator()

const AuthStack = () => {
    return (
            <Stack.Navigator
            initialRouteName='Login'
            screenOptions={({navigation, route})=>{
                return{
                    header:()=> <Header
                    title={route.name === "Login" ? "Inicio de Sesion": "Registro"}
                    navigation={navigation}
                    />
                }
            }}
            >
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Register" component={Register}/>
            </Stack.Navigator>
    )
}

export default AuthStack