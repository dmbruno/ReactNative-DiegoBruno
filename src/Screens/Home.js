import { StyleSheet } from 'react-native'
import Categories from '../Components/Categories'
import { View } from 'react-native-web'



const Home = ({ navigation }) => {

    return (
        <>
            <Categories navigation={navigation} />
        </>
    )
}

export default Home

const styles = StyleSheet.create({})