import { StyleProp, StyleSheet, Text, TextInput, TextStyle, View } from "react-native";

type InputProps = {
    onChange?: (value: string) => void,
    value?: string,
    placeholder?: string,
    error: boolean,
    errorText: string,
    keyboardType?: "numeric"
    secureTextEntry?: boolean;
    sx?: StyleProp<TextStyle>;
}

export default function Input({onChange, value, placeholder, error, errorText, keyboardType, secureTextEntry, sx}:InputProps){

    return (
        <View>            
            <TextInput
                // style={{...styles.input, ...styles.inputError}}
                // style={{...sx, ...styles.input, borderWidth: error ? 1 : 0}}
                style={[
                    styles.input,
                    sx, // Pode ser um objeto ou array
                    { borderWidth: error ? 1 : 0 },
                ]}
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
        borderRadius: 4
    },
    textError: {
        height: 16,
        color: "#F00",
        fontSize: 12,
    }
})