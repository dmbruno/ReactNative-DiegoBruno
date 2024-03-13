import { View,StyleSheet } from 'react-native'
import colors from '../../utils/Global/Colors'


const ShadowPrimary = ({style,children}) => {
    
    return (
        <View style={[styles.container,style]}>
            {children}
        </View>
    )
}

export default ShadowPrimary

const styles = StyleSheet.create({
    container:{
        shadowColor:"#000",
        shadowOffset:{
            width:5,
            height:7
        },
        shadowOpacity:0.39,
        shadowRadius:8.30,
        borderWidth:1,
        borderColor:colors.Letras
    }
})