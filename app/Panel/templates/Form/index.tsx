import { StyleSheet, View } from "react-native";
import InputDescription from "../../components/InputDescription";
import InputName from "../../components/InputName";
import useFields from "../../hooks/useFields";

export default function Form(){
    const {folderData, handleChangeNameValue, handleChangeDescriptionValue} = useFields();
    return(
        <View style={styles.form}>
            <InputName state={folderData.name} onChange={handleChangeNameValue} />
            <InputDescription state={folderData.description} onChange={handleChangeDescriptionValue}/>
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