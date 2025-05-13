import Input from "@/components/Input";
import { InputProps } from "@/types/input";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import ButtonSearch from "../../components/ButtonSearch";

export default function Search({onSearch, setRows}: {onSearch: (results:any) => void, setRows: any}){
    const [searchInput, setSearchInput] = useState<InputProps>({
        value: "",
        placeholder: "Buscar Pasta...",
        error: false,
        errorText: ""
    });
    const handleSearchInputChange = (value: string) => {
        setSearchInput(prev => ({
          ...prev,
          value: value
        }));
    };

    return (
        <View style={styles.search}>
            <Input 
                error={searchInput.error}
                value={searchInput.value}
                errorText={searchInput.errorText}
                placeholder={searchInput.placeholder}
                onChange={handleSearchInputChange}
                sx={{width: "auto", minWidth: 300}}
            />
            <ButtonSearch searchText={searchInput.value} setRows={setRows}/>
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