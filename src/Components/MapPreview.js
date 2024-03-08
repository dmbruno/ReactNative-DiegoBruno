import { StyleSheet, Image } from 'react-native'
import React from 'react'

const MapPreview = ({latitude, longitude}) => {
    const MapPreview = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}
    &zoom=15
    &size=600x300
    &maptype=roadmap
    &markers=color:blue%7Clabel:S%7C${latitude},${longitude}
    &key=AIzaSyB7eIX_saOVTYb9HuiO9GWcH5_wMVRnuUg`
    return (
        <Image source={latitude? {uri: MapPreview} :  require("../../assets/img/GoogleMaps.jpg")} style={styles.image}/>
    )
}

export default MapPreview

const styles = StyleSheet.create({
    image:{
        width:300,
        height:300
    }
})