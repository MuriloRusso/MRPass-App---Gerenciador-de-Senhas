import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { ComponentType } from "react";

type ButtonPrimaryIconProps = {
    text: string;
    icon: ComponentType<any>;
    onClick?: () => void;
}

export default function ButtonPrimaryIcon({text, icon, onClick}: ButtonPrimaryIconProps){
    const ButtonIcon: ComponentType<any> = icon;
    return (
        <TouchableOpacity style={styles.button} onPress={onClick}>
            <ButtonIcon />
            {text != "" && <Text style={styles.buttonText}>{text}</Text>}
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    button: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#FE715B",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 5,
        paddingHorizontal: 15,
        gap: 5,
        borderRadius: 4
    },
    buttonText: {
        color: "#fff"
    }
})