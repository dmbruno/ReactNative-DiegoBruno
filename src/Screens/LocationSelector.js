import { StyleSheet, Text, View } from 'react-native'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import AddButton from '../Components/AddButton'
import MapPreview from '../Components/MapPreview'
import Fonts from '../utils/Global/fonts'
import * as Location from "expo-location"
import { usePutUserLocationMutation } from '../app/services/Profile'




const LocationSelector = ({ navigation }) => {

    const [location, setLocation] = useState({ latitude: "", longitude: "" })
    const [errorMessage, setErrorMessage] = useState(null)
    const [address, setAddress] = useState("")
    const localId = useSelector((state) => state.auth.localId)
    const [triggerUserLocation] = usePutUserLocationMutation(localId)

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync()
            if (status !== "granted") {
                setErrorMessage("Permiso denegado")
                return
            }
            let location = await Location.getCurrentPositionAsync()
            setLocation({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude
            })
        })()
    }, [])

    useEffect(() => {
        (async () => {
            if (location.latitude) {
                const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}
                &key=AIzaSyB7eIX_saOVTYb9HuiO9GWcH5_wMVRnuUg`)

                const data = await response.json()
                setAddress(data.results[0].formatted_address);
            }

        })()
    }, [location])




    const onConfirmAddress = async () => {
        const locationFormatted = {
            address,
            location
        }

        await triggerUserLocation({ localId, locationFormatted })
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{address}</Text>
            <MapPreview latitude={location.latitude} longitude={location.longitude} />
            <AddButton title="Confirmar Direccion" onPress={onConfirmAddress} />
        </View>
    )
}

export default LocationSelector

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginTop: 40,
        gap: 20
    },
    text: {
        fontFamily: Fonts.JosefinSansBold,
        fontSize: 20,
        marginVertical: 15,
        fontWeight: "bold"
    }
})