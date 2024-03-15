import { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import colors from '../utils/Global/Colors'
import Fonts from '../utils/Global/fonts'
import InputForm from '../Components/InputForm'
import SubmitButton from '../Components/SubmitButton'
import { useRegisterMutation } from '../app/services/auth'
import { setUser } from '../features/auth/authSlice'
import { useDispatch } from 'react-redux'
import { registerSchema } from '../utils/validations/auhtSchema'
import { deleteSession, insertSession } from '../utils/db'
import ModalMessage from '../Components/ModalMessage'


const Register = ({ navigation }) => {

    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPass, setConfirmPass] = useState("")
    const [triggerRegister] = useRegisterMutation()

    const [errorEmail, setErrorEmail] = useState("")
    const [errorPassword, setErrorPassword] = useState("")
    const [errorConfirmPass, setErrorConfirmPass] = useState("")
    const [modalVisible, setModalVisible] = useState(false)

    const handleCloseModal = () => {
        setModalVisible(false)
    }

    const onSubmit = async () => {
        try {
            registerSchema.validateSync({ email, password, confirmPass })
            const { data, error } = await triggerRegister({ email, password })

            if (error) {
                setModalVisible(true)
            }


            deleteSession()
            insertSession(data)

            dispatch(setUser({ email: data.email, idToken: data.idToken, localId: data.localId }))

        } catch (error) {
            setErrorEmail("")
            setErrorPassword("")
            setErrorConfirmPass("")
            switch (error.path) {
                case "email":
                    setErrorEmail(error.message)
                    
                    break;
                case "password":
                    
                    setErrorPassword(error.message)
                    break;
                case "confirmPass":
                    
                    setErrorConfirmPass(error.message)
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
                    <InputForm
                        label="Confirm Password"
                        value={confirmPass}
                        onChangeText={(e) => setConfirmPass(e)}
                        isSecure={true}
                        error={errorConfirmPass}
                    />
                    <SubmitButton onPress={onSubmit} title="Registrarme" />
                    <Text style={styles.sub}>Ya tienes una cuenta?</Text>
                    <Pressable onPress={() => navigation.navigate("Login")}>
                        <Text style={styles.subLink}>Inciar Sesion</Text>
                    </Pressable>
                </View>
            </View>
            <ModalMessage textButton="Volver"
                text="¡Verifica los datos ingresados!"
                modalVisible={modalVisible}
                onclose={handleCloseModal} />
        </>
    )
}

export default Register

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
    sub: {
        color: "white",
        fontSize: 16,
        fontFamily: Fonts.ProtestRiotRegular
    },
    subLink: {
        fontSize: 20,
        fontFamily: Fonts.JosefinSansBold,
        color: colors.Letras
    }
})