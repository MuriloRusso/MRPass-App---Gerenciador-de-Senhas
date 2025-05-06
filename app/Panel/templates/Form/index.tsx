import { FolderDataProps } from "@/types/folder";
import { StyleSheet, View } from "react-native";
import InputDescription from "../../components/InputDescription";
import InputName from "../../components/InputName";

type FormProps = {
    data:FolderDataProps;
    handleChangeDescriptionValue: (value:string) => void;
    handleChangeNameValue: (value:string) => void;
}

export default function Form({data, handleChangeDescriptionValue, handleChangeNameValue}:FormProps){
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