import { Button } from "@/types/button";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function ButtonPrimary({text, onClick}:Button){
    return (
        <TouchableOpacity onPress={onClick} style={styles.button} activeOpacity={0.6}>
            <Text style={styles.buttonText}>{text}</Text>        
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: "#FE715B",
        paddingVertical: 15,
    },
    buttonText: {
        textAlign: 'center',
        color: "#fff"
    }
})