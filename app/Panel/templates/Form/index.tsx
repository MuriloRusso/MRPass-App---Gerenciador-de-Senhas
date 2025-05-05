import { StyleSheet, View } from "react-native";
import InputDescription from "../../components/InputDescription";
import InputName from "../../components/InputName";
import useFields from "../../hooks/useFields";
import { FolderDataProps } from "@/types/folder";

export default function Form({data, handleChangeDescriptionValue, handleChangeNameValue}:{data:FolderDataProps; handleChangeDescriptionValue: () => void; handleChangeNameValue: () => void;}){
    // const {folderData, handleChangeNameValue, handleChangeDescriptionValue} = useFields();
    return(
        <View style={styles.form}>
            <InputName state={data.name} onChange={handleChangeNameValue} />
            <InputDescription state={data.description} onChange={handleChangeDescriptionValue}/>
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