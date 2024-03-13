import { Platform, Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import colors from "../utils/Global/Colors";
import Fonts from '../utils/Global/fonts';
import { Ionicons } from "@expo/vector-icons";
import { useSelector, useDispatch } from 'react-redux';
import {AntDesign} from "@expo/vector-icons"
import { clearUser } from '../features/auth/authSlice';
import { deleteSession } from '../utils/db';

const Header = ({ title, navigation }) => {
    const dispatch = useDispatch()


    const idToken = useSelector(state => state.auth.idToken)

    const windowDimensions = useWindowDimensions();
    const isPortrait = windowDimensions.height > windowDimensions.width;


    const onLogout = () => {
        dispatch(clearUser())
        deleteSession()
    }

    return (
        <View style={[styles.container, !isPortrait && styles.landscapeContainer]}>
            {navigation.canGoBack() &&
                <Pressable style={styles.goBack} onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back-circle-sharp" size={35} color="#F6C90E" />
                </Pressable>}
            <Text style={[styles.text, !isPortrait && styles.landscapeText]}>{title}</Text>
            {idToken && (
                <Pressable style={styles.logoutIcon} onPress={onLogout}>
                    <AntDesign name="logout" size={30} color="#F6C90E" />
                </Pressable>)}
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    logoutIcon: {
        position: "absolute",
        right: 20,
        bottom: 20
    },
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
        color: colors.Letras
    },
    landscapeText: {
        fontSize: 35,
        color: "white",
        letterSpacing: 3
    },
    goBack: {
        position: "absolute",
        left: 20,
        bottom: 20
    }
});
