import { StyleSheet, Text, View, TextInput } from 'react-native'
import Fonts from '../utils/Global/fonts'

const InputForm = ({label, value, onChangeText, isSecure}) => {
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.titleInput}>{label}</Text>
            <TextInput 
            value={value} 
            onChangeText={onChangeText} 
            style={styles.input}
            secureTextEntry={isSecure}
            
            />
            
        </View>
    )
}

export default InputForm

const styles = StyleSheet.create({
    inputContainer:{
        width:"100%"
    },
    input:{
        width:"90%",
        borderWidth:0,
        borderBottomWidth:1,
        borderBottomColor: "white",
        padding:2,
        fontFamily:Fonts.JosefinSansBold,
        fontSize:14,
        marginHorizontal:"5%",
        marginVertical:10
    },
    titleInput:{
        width:"90%",
        marginHorizontal:"5%",
        fontSize:16,
        fontFamily: Fonts.JosefinSansBold
    },
    
})