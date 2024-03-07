import { StyleSheet, View, Image } from 'react-native'
import { useSelector } from 'react-redux'
import { useGetImageQuery } from '../app/services/Profile'
import AddButton from '../Components/AddButton'

const Profile = ({navigation}) => {
    
    const localId = useSelector((state)=> state.auth.localId)
    const {data} = useGetImageQuery(localId)
    

    return (
        <View style={styles.container}>
            <Image
            source={data && data.image ? {uri:data.image} : require("../../assets/img/user.png")}
            style={styles.image}
            resizeMode="cover"
            />
            <AddButton title={"Agregar imagen de perfil"} onPress={()=> navigation.navigate("ImageSelector")} />
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        marginTop:20
    },
    image:{
        width:200,
        height:200,
        
    }
})