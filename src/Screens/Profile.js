import { StyleSheet, Text, View, Image } from 'react-native'
import AddButton from '../Components/AddButton'
import { useSelector } from 'react-redux'
import { useGetImageQuery, useGetUserLocationQuery } from '../app/services/Profile'
import Fonts from '../utils/Global/fonts'
import colors from '../utils/Global/Colors'



const Profile = ({ navigation }) => {

    const localId = useSelector((state) => state.auth.localId)
    const { data: locationFormatted } = useGetUserLocationQuery(localId)

    const { data } = useGetImageQuery(localId)


    return (
        <View style={styles.container}>
            <Image
                source={data ? { uri: data.image } : require("../../assets/img/user.png")}
                style={styles.image}
                resizeMode='cover'
            />
            <Text style={styles.text}>{locationFormatted?.address}</Text>
            <AddButton title={"Agregar Imagen de perfil"} onPress={() => navigation.navigate("ImageSelector")} />
            <AddButton title={"Agregar Direccion"} onPress={() => navigation.navigate("LocationSelector")} />
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor:colors.headeryfooter
    },
    image: {
        width: 200,
        height: 200,
        borderRadius:5

    },
    text: {
        fontFamily: Fonts.JosefinSansBold,
        fontSize: 20,
        marginVertical: 20,
        fontWeight: "bold",
        color:colors.Letras
    }
})