import { StyleSheet, Text, View } from 'react-native'
import {Entypo} from "@expo/vector-icons"
import colors from '../utils/Global/Colors'


const TabBarIcon = ({title, nameIcon, focused}) => {
    return (
        <View style={styles.container}>
            <Entypo name={nameIcon} size={25} color={focused ? "white": colors.Letras}/>
            <Text style={[styles.text,focused && styles.textFocused]}>{title}</Text>
        </View>
    )
}

export default TabBarIcon

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        marginLeft:7,
        top:15,
        
    },
    text:{
        color:colors.Letras,
        fontSize:15
    },
    textFocused:{
        color:colors.lightGray,
        
    }
})