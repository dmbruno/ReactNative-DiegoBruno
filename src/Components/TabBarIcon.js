import { StyleSheet, Text, View } from 'react-native'
import {Entypo} from "@expo/vector-icons"
import colors from '../utils/Global/Colors'


const TabBarIcon = ({title, nameIcon, focused, badgeValue}) => {
    return (
        <View style={styles.container}>
            <Entypo name={nameIcon} size={25} color={focused ? "white" : colors.Letras} />
            {badgeValue > 0 && (
                <View style={styles.badge}>
                    <Text style={styles.badgeText}>{badgeValue}</Text>
                </View>
            )}
            <Text style={[styles.text, focused && styles.textFocused]}>{title}</Text>
        </View>
    )
}

export default TabBarIcon

const styles = StyleSheet.create({
    badge: {
        position: 'absolute',
        top: -5,
        right: -10,
        backgroundColor: 'red',
        borderRadius: 10,
        paddingHorizontal: 6,
        paddingVertical: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    badgeText: {
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold'
    },
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
        
    },
    
})