import { Platform, Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import colors from "../utils/Global/Colors";
import Fonts from '../utils/Global/fonts';
import { Ionicons } from "@expo/vector-icons";

const Header = ({ title, navigation }) => {
    const windowDimensions = useWindowDimensions();
    const isPortrait = windowDimensions.height > windowDimensions.width;

    return (
        <View style={[styles.container, !isPortrait && styles.landscapeContainer]}>
            {navigation.canGoBack() &&
                <Pressable style={styles.goBack} onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back-circle-sharp" size={30} color="white" />
                </Pressable>}
            <Text style={[styles.text,!isPortrait && styles.landscapeText]}>{title}</Text>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#222831",
        height: 100,
        paddingTop: Platform.OS === "android" ? statusbar.currentHeight : 0,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        position: "relative"
    },
    landscapeContainer: {
        height: 50 
    },
    text: {
        fontSize: 30,
        fontFamily: Fonts.ProtestRiotRegular,
        paddingTop: 20,
        color:colors.Letras
    },
    landscapeText:{
        fontSize:35,
        color:"white",
        letterSpacing: 3
    },
    goBack: {
        position: "absolute",
        left: 15,
        bottom: 8
    }
});
