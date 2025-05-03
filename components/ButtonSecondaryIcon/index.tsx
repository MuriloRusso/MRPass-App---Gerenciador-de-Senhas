import { ComponentType } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type ButtonSecondaryIconProps = {
    text: string;
    icon: ComponentType<any>;
    onClick?: () => void;
}

export default function ButtonSecondaryIcon({text, icon, onClick}: ButtonSecondaryIconProps){
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
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 5,
        paddingHorizontal: 15,
        gap: 5,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: "#FE715B",
    },
    buttonText: {
        color: "#FE715B",
    }
})