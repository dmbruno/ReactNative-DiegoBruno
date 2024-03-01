import { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import colors from '../utils/Global/Colors'
import Fonts from '../utils/Global/fonts'
import InputForm from '../Components/InputForm'
import SubmitButton from '../Components/SubmitButton'


const Login = ({navigation}) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onSubmit = () =>{
        console.log(email, password);
    }

    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <InputForm
                    label="Email"
                    value={email}
                    onChangeText={(e) => setEmail(e)}
                    isSecure={false}
                    error=""
                />
                <InputForm
                    label="Password"
                    value={password}
                    onChangeText={(e) => setPassword(e)}
                    isSecure={true}
                    error=""
                />
                <SubmitButton onPress={onSubmit} title="Iniciar Sesion" />
                <Text style={styles.sub}>No tenes una cuenta?</Text>
                <Pressable onPress={()=> navigation.navigate("Register")}>
                    <Text style={styles.subLink}>Registro</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    container: {
        width: "90%",
        backgroundColor: colors.green1,
        gap: 15,
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
        paddingVertical:20
    },
    title:{
        fontSize:22,
        fontFamily: Fonts.ProtestRiotRegular
    },
    sub:{
        fontSize:14,
        fontFamily:Fonts.JosefinSansBold
    },
    subLink:{
        fontSize:14,
        fontFamily: Fonts.JosefinSansBold,
        color: "blue"
    }
})