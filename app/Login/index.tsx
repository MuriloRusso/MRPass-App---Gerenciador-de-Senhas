import Form from "@/app/templates/Form";
import Loading from "@/components/Loading";
import { GlobalContext } from "@/contexts/GlobalContext";
import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Login(){
    const { loading } = useContext(GlobalContext);

    return(
        <View style={{...styles.container, display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100%'}}>
            <Text style={styles.title}>MRPass</Text>
            <Text>Gerenciamento de Senhas</Text>
            <Form/>
            <Loading visible={loading}/>
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