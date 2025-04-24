import Form from "@/app/templates/Form";
import { StyleSheet, Text, View } from "react-native";

export default function HomePage(){
    return(
        <View style={{...styles.container, display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100%'}}>
            <Text style={styles.title}>MRPass</Text>
            <Text>Gerenciamento de Senhas</Text>
            <Form/>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginHorizontal: 5,
    },
    title: {
        color: '#FE715B',
        fontSize: 38,
        fontWeight: 600
    }
})