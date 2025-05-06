import { Folder } from "@/types/folder";
import { useEffect, useState } from "react";
import { View } from "react-native";
import useFields from "./hooks/useFields";
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
    const { modalCreateVisible, handleModalCreate } = useModals();

    const {folderData, handleChangeNameValue, handleChangeDescriptionValue} = useFields();

    const [selectedItem, setSelectedItem] = useState<Folder | null>(null);

    const handleSelectedItemChange = (item:Folder | null) => {
        setSelectedItem(item);
    }
    useEffect(()=>{
        console.log('selectItem');
        console.log(selectedItem);
    }, [selectedItem])

    return (
        <View>
            <View style={{height: "100%"}}>
                <Header handleModalCreate={handleModalCreate}/>
                <Search onSearch={(results) => setRows(results)} setRows={setRows}/>
                <List modalConfirmDeleteFunction={handleModalDelete} rows={rows} selectItemFunction={handleSelectedItemChange} />
            </View>
            <ModalConfirmDelete isVisible={modalDeleteVisible} handleFunction={handleModalDelete} selectedItem={selectedItem} />
            <ModalCreate 
                data={folderData}
                handleChangeNameValue={handleChangeNameValue}
                handleChangeDescriptionValue={handleChangeDescriptionValue}
                isVisible={modalCreateVisible}
                handleFunction={handleModalCreate}
            />
        </View>
    )
}