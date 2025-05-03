import { Folder } from "@/types/folder";
import { useState } from "react";
import { View } from "react-native";
import useGetList from "./hooks/useGetList";
import useModals from "./hooks/useModals";
import Header from "./templates/Header";
import List from "./templates/List";
import ModalConfirmDelete from "./templates/ModalConfirmDelete";
import ModalCreate from "./templates/ModalCreate";
import Search from "./templates/Search";

export default function Panel(){
    
    const {modalDeleteVisible, handleModalDelete} = useModals();

    const [rows, setRows] = useState<Folder[]>([]);
    const { folders } = useGetList();

    return (
        <View>
            <View style={{height: "100%"}}>
                <Header/>
                <Search onSearch={(results) => setRows(results)} setRows={setRows}/>
                <List modalConfirmDeleteFunction={handleModalDelete} rows={rows}/>
            </View>
            <ModalConfirmDelete isVisible={modalDeleteVisible} handleFunction={handleModalDelete} />
            <ModalCreate isVisible={true} handleFunction={()=>{}} />
        </View>
    )
}