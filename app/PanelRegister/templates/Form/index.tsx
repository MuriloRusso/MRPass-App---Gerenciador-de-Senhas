import { FolderDataProps } from "@/types/folder";
import { StyleSheet, View } from "react-native";
import InputDescription from "../../components/InputDescription";
import InputPlataform from "../../components/InputPlataform";

type FormProps = {
    data:FolderDataProps;
    handleChangeDescriptionValue: (value:string) => void;
    handleChangeNameValue: (value:string) => void;
}

export default function Form({data, handleChangeDescriptionValue, handleChangeNameValue}:FormProps){
    return(
        <View style={styles.form}>
            <InputPlataform state={data.name} onChange={handleChangeNameValue} />
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