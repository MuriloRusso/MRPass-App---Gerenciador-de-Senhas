import { FolderDataProps } from "@/types/folder";
import { StyleSheet, View } from "react-native";
import InputDescription from "../../components/InputDescription";
import InputLink from "../../components/InputLink";
import InputPassword from "../../components/InputPassword";
import InputPlataform from "../../components/InputPlataform";
import InputUser from "../../components/InputUser";

type FormProps = {
    data:FolderDataProps;
    handleChangeDescriptionValue: (value:string) => void;
    handleChangeNameValue: (value:string) => void;
}

export default function Form({data, handleChangeDescriptionValue, handleChangeNameValue}:FormProps){
    return(
        <View style={styles.form}>
            <InputPlataform state={data.name} onChange={handleChangeNameValue} />
            <InputLink state={data.name} onChange={handleChangeNameValue} />
            <InputUser state={data.name} onChange={handleChangeNameValue} />
            <InputPassword state={data.name} onChange={handleChangeNameValue} />
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