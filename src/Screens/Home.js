import { StyleSheet, View } from 'react-native'
import Header from '../Components/Header'
import Categories from '../Components/Categories'
import Search from '../Components/Search'



const Home = ({selectedCategoryState}) => {

    return (
        <>
            <Header title="Menu Grizzly" />
            
            <Categories selectedCategoryState={selectedCategoryState}/>
        </>
    )
}

export default Home

const styles = StyleSheet.create({
    
})