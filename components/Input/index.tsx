import { StyleSheet, Text, TextInput, View } from "react-native";

type InputProps = {
    onChange?: (value: string) => void,
    value?: string,
    placeholder?: string,
    error: boolean,
    errorText: string,
    keyboardType?: "numeric"
    secureTextEntry?: boolean;

}

export default function Input({onChange, value, placeholder, error, errorText, keyboardType, secureTextEntry}:InputProps){

    return (
        <View>            
            <TextInput
                // style={{...styles.input, ...styles.inputError}}
                style={{...styles.input, borderWidth: error ? 1 : 0}}
                placeholder={placeholder}
                onChangeText={onChange}
                value={value}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
            />
            {error && <Text style={styles.textError}>{errorText}</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#EBEBEB',
        padding: 10,
        height: 50,
        borderColor: "#F00",
    },
    textError: {
        height: 16,
        color: "#F00",
        fontSize: 12,
    }
})