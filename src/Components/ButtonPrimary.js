import { StyleSheet, Text, Pressable } from 'react-native'
import colors from '../utils/Global/Colors'



const ButtonPrimary = ({ title, onPress, style = {} }) => {
    return (
        <Pressable style={[style, styles.container]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    )
}


export default ButtonPrimary


const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.green1,
        paddingHorizontal: 50,
        paddingVertical: 10,
        margin: 10,
        borderRadius: 5
    },
    text: {
        color: "white",
        fontWeight:"bold",
        textAlign: "center",
        fontSize: 20
    }
})