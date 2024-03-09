import { StyleSheet, Text, View, Image } from 'react-native'
import AddButton from '../Components/AddButton'
import { useSelector } from 'react-redux'
import { useGetImageQuery, useGetUserLocationQuery } from '../app/services/Profile'
import Fonts from '../utils/Global/fonts'
import { useState, useEffect } from 'react'


const Profile = ({ navigation }) => {

    const localId = useSelector((state) => state.auth.localId)
    const {data:locationFormatted} = useGetUserLocationQuery(localId)
    
    const { data } = useGetImageQuery(localId)
    const [address, setAddress] = useState('');

    useEffect(() => {
        if (locationFormatted) {
            setAddress(locationFormatted.address);
        }
    }, [locationFormatted]);

    return (
        <View style={styles.container}>
            <Image
                source={data ? { uri: data.image } : require("../../assets/img/user.png")}
                style={styles.image}
                resizeMode='cover'
            />
            <Text style={styles.text}>{address}</Text>
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
        marginTop: 20
    },
    image: {
        width: 200,
        height: 200,

    },
    text: {
        fontFamily: Fonts.JosefinSansBold,
        fontSize: 20,
        marginVertical: 15,
        fontWeight: "bold"
    }
})