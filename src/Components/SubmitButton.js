import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../utils/Global/Colors'

const SubmitButton = ({title, onPress}) => {
    return (
        <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    )
}

export default SubmitButton

const styles = StyleSheet.create({
    button:{
        width:"60%",
        backgroundColor: "white",
        padding:10,
        alignItems:"center",
        borderRadius:10
    },
    text:{
        textAlign:"center",
        color: colors.headeryfooter,
        fontSize:18,
        fontWeight:"bold"
    }
})