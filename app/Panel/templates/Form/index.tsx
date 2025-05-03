import { StyleSheet, View } from "react-native";
import InputDescription from "../../components/InputDescription";
import InputName from "../../components/InputName";

export default function Form(){
    return(
        <View style={styles.form}>
            <InputName/>
            <InputDescription/>
        </View>
    )
}

const styles = StyleSheet.create({
    form:{
        flexDirection: "column",
        gap: 20,
        width: "100%"
    }
})