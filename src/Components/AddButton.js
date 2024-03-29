import { StyleSheet, Text, Pressable } from 'react-native'
import colors from '../utils/Global/Colors'


const AddButton = ({ title, onPress }) => {
    return (
        <Pressable style={styles.container} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    )
}

export default AddButton

const styles = StyleSheet.create({
    container: {
        marginTop:15,
        backgroundColor: colors.green3,
        width: "70%",
        paddingVertical: 8,
        margin: 10,
        borderRadius: 10
    },
    text: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18,

    }
})