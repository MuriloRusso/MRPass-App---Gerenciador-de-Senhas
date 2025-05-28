import { StyleProp, StyleSheet, Text, TextInput, TextStyle, View } from "react-native";

type InputProps = {
    onChange?: (value: string) => void;
    value?: string;
    placeholder?: string;
    error: boolean;
    errorText: string;
    keyboardType?: "numeric";
    secureTextEntry?: boolean;
    sx?: StyleProp<TextStyle>;
};

export default function Textarea({
    onChange,
    value,
    placeholder,
    error,
    errorText,
    keyboardType,
    secureTextEntry,
    sx,
}: InputProps) {
    return (
        <View>
            <TextInput
                style={[
                    styles.input,
                    sx,
                    { borderWidth: error ? 1 : 0 },
                ]}
                placeholder={placeholder}
                placeholderTextColor="#000"
                onChangeText={onChange}
                value={value}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
                multiline={true}
                numberOfLines={4}
                textAlignVertical="top"
            />
            {error && <Text style={styles.textError}>{errorText}</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#EBEBEB',
        padding: 10,
        height: 100, // altura aumentada para parecer um textarea
        borderColor: "#F00",
        borderRadius: 4,
        color: '#000',

    },
    textError: {
        height: 16,
        color: "#F00",
        fontSize: 12,
        marginTop: 4,
    },
});
