import Input from "@/components/Input";
import { StyleSheet, View } from "react-native";
import ButtonSearch from "../../components/ButtonSearch";

export default function Search(){
    return (
        <View style={styles.search}>
            <Input error={false} value="" errorText="" placeholder="Buscar..."/>
            <ButtonSearch/>
        </View>
    )
}

const styles = StyleSheet.create({
    search: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10
        
    }
})