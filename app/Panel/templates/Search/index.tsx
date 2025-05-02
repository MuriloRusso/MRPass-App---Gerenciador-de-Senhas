import Input from "@/components/Input";
import { StyleSheet, View } from "react-native";
import ButtonSearch from "../../components/ButtonSearch";

export default function Search(){
    return (
        <View style={styles.search}>
            <Input error={false} value="" errorText="" placeholder="Buscar Pasta..." sx={{width: "auto", minWidth: 300}} />
            <ButtonSearch/>
        </View>
    )
}

const styles = StyleSheet.create({
    search: {
        backgroundColor: "#fff",
        display: 'flex',
        flexDirection: "row",
        // justifyContent: "space-between",
        padding: 10,
        borderBottomWidth: 1,
        borderColor: "#ccc",
        marginTop: 10,
        gap: 10
    }
})