import { View,StyleSheet } from 'react-native'


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
        shadowRadius:8.30
    }
})