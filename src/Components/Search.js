import { Keyboard, Pressable, StyleSheet, TextInput, View, Text } from 'react-native'
import { EvilIcons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import colors from '../utils/Global/Colors'
import { useState } from 'react'



const Search = ({ handleKeyWord }) => {

    const [input, setInput] = useState("")
    const handleInput = (t) => setInput(t)
    const [error, setError] = useState("")
    const search = () => {

        const expression = /^[a-zA-Z]+$/;


        if (!expression.test(input)) {
            setError("caracteres no validos!!")
            return
        }
        setError("")
        handleKeyWord(input)
        Keyboard.dismiss()
    }
    const resetSearch = () => {
        handleKeyWord("")
        handleInput("")
        setError("")
    }

    return (
        <View>
            <View style={styles.container}>
                <TextInput
                    placeholder='Buscar'
                    value={input}
                    onChangeText={handleInput}
                    style={styles.input}
                />
                <Pressable onPress={search}>
                    <EvilIcons name="search" size={34} color="black" />
                </Pressable>
                <Pressable onPress={resetSearch}>
                    <AntDesign name="closecircle" size={26} color="black" />
                </Pressable>
            </View>
            {error ? <Text style={styles.error}>{error}</Text> : null}
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.green2,
        flexDirection: "row",
        padding: 10,
        alignItems: "center"
    },
    input: {
        padding: 10,
        flex: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderWidth: 2
    },
    error:{
        color:"red",
        padding:20,
        textAlign:"center"
    }
})