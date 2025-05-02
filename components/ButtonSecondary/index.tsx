import { Button } from "@/types/button";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function ButtonSecondary({text, onClick}:Button){
    return (
        <TouchableOpacity onPress={onClick} style={styles.button} activeOpacity={0.6}>
            <Text style={styles.buttonText}>{text}</Text>        
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button: {
        // backgroundColor: "#FE715B",
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderColor: "#FE715B",
        borderWidth: 1,
        backgroundColor: "#fff"
    },
    buttonText: {
        textAlign: 'center',
        color: "#FE715B"
    }
})