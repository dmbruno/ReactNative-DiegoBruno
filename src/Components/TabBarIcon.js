import { StyleSheet, Text, View } from 'react-native'
import {Entypo} from "@expo/vector-icons"
import colors from '../utils/Global/Colors'


const TabBarIcon = ({title, nameIcon, focused}) => {
    return (
        <View style={styles.container}>
            <Entypo name={nameIcon} size={25} color={focused ? colors.lightGray : colors.green1}/>
            <Text style={[styles.text,focused && styles.textFocused]}>{title}</Text>
        </View>
    )
}

export default TabBarIcon

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        top:15
    },
    text:{
        color:colors.green1,
        fontSize:15
    },
    textFocused:{
        color:colors.lightGray,
        fontWeight:"bold"
    }
})