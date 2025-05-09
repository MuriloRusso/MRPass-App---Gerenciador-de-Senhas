import ButtonPrimary from "@/components/ButtonPrimary";
import Input from "@/components/Input";
import { StyleSheet, View } from "react-native";
import { useAuth } from "@/contexts/AuthContext";

export default function Form(){
    const { userData, handleEmailChange, handlePasswordChange, signIn } = useAuth();
    return (
        <View style={styles.form}>
            <Input
                error={userData.email.error}
                errorText={userData.email.error ? userData.email.errorText : ""}
                placeholder={userData.email.placeholder}
                value={userData.email.value}
                onChange={handleEmailChange}
            />
            <Input
                error={userData.password.error}
                errorText={userData.password.error ? userData.password.errorText : ""}
                placeholder={userData.password.placeholder}
                value={userData.password.value}
                onChange={handlePasswordChange}
                secureTextEntry={true}
            />
            <ButtonPrimary text="Entrar" onClick={signIn}/>
        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        marginTop: 30,
        display: "flex",
        flexDirection: 'column',
        gap: 20,
        minWidth: 200,
        width: '80%',
        maxWidth: 400
    }
})