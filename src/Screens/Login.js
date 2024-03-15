import { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import colors from '../utils/Global/Colors'
import Fonts from '../utils/Global/fonts'
import InputForm from '../Components/InputForm'
import SubmitButton from '../Components/SubmitButton'
import { useLoginMutation } from '../app/services/auth'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/auth/authSlice'
import { loginSchema } from '../utils/validations/auhtSchema'
import { insertSession, deleteSession } from '../utils/db'
import ModalMessage from '../Components/ModalMessage'

const Login = ({ navigation }) => {

    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [triggerLogin] = useLoginMutation()
    const [errorEmail, setErrorEmail] = useState("")
    const [errorPassword, setErrorPassword] = useState("")
    const [modalVisible, setModalVisible] = useState(false)

    const handleCloseModal = () =>{
        setModalVisible(false)
    }

    const onSubmit = async () => {
        try {
            loginSchema.validateSync({ email, password })
            const { data, error } = await triggerLogin({ email, password })

            if (error) {
                setModalVisible(true)
            }
            deleteSession()
            insertSession(data)
            dispatch(setUser({ email: data.email, idToken: data.idToken, localId: data.localId }))

        } catch (error) {

            setErrorEmail("")
            setErrorPassword("")

            switch (error.path) {
                case "email":
                    console.log(error.message);
                    setErrorEmail(error.message)
                    break;
                case "password":
                    console.log(error.message);
                    setErrorPassword(error.message)
                    break
                default:
                    break;
            }
        }

    }

    return (
        <>
            <View style={styles.main}>
                <View style={styles.container}>
                    <InputForm
                        label="Email"
                        value={email}
                        onChangeText={(e) => setEmail(e)}
                        isSecure={false}
                        error={errorEmail}
                    />
                    <InputForm
                        label="Password"
                        value={password}
                        onChangeText={(e) => setPassword(e)}
                        isSecure={true}
                        error={errorPassword}
                    />
                    <SubmitButton onPress={onSubmit} title="Iniciar Sesion" />
                    <Text style={styles.sub}>No tenes una cuenta?</Text>
                    <Pressable onPress={() => navigation.navigate("Register")}>
                        <Text style={styles.subLink}>Registro</Text>
                    </Pressable>
                </View>
            </View>
            <ModalMessage textButton="Volver"
                text="Email o Contraseña Invalido"
                modalVisible={modalVisible}
                onclose={handleCloseModal} />
        </>
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
        backgroundColor: colors.NegroFondo,
        gap: 15,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 20,
        marginBottom: 300
    },
    title: {
        fontSize: 22,
        fontFamily: Fonts.ProtestRiotRegular
    },
    sub: {
        fontSize: 16,
        fontFamily: Fonts.ProtestRiotRegular,
        color: "white"
    },
    subLink: {
        fontSize: 20,
        fontFamily: Fonts.JosefinSansBold,
        color: colors.Letras
    },

})