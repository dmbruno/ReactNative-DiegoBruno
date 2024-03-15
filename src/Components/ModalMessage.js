import { StyleSheet, Text, View, Modal } from 'react-native'
import colors from '../utils/Global/Colors'
import Fonts from '../utils/Global/fonts'
import ButtonPrimary from './ButtonPrimary'



const ModalMessage = ({ text, textButton, onclose, modalVisible }) => {

    return (
        <Modal
            visible={modalVisible}
            transparent={true}
            animationType='fade'
            onRequestClose={onclose}
        >
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.text}>{text}</Text>
                    <ButtonPrimary title={textButton} onPress={onclose} />
                </View>
            </View>
        </Modal>
    )
}

export default ModalMessage

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.headeryfooter,
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    content: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.headeryfooter,
        padding: 30,
        gap: 20,
        borderRadius: 5
    },
    text: {
        fontSize: 20,
        color: "white",
        fontFamily: Fonts.JosefinSansBold
    }

})