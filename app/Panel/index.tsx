import { View } from "react-native";
// import ModalCreate from "./templates/ModalCreate";
import { Folder } from "@/types/folder";
import { useEffect, useState } from "react";
import useGetList from "./hooks/useGetList";
import useModals from "./hooks/useModals";
import Header from "./templates/Header";
import List from "./templates/List";
import ModalConfirmDelete from "./templates/ModalConfirmDelete";
import Search from "./templates/Search";

export default function Panel(){
    
    const {modalDeleteVisible, handleModalDelete} = useModals();

    const [rows, setRows] = useState<Folder[]>([]);
    const { folders } = useGetList();
    
    useEffect(()=>{
        setRows(folders);
    }, [folders])

    // const [ serach ]
    return (
        <View>            
            <View style={{height: "100%"}}>
                <Header/>
                <Search onSearch={(results) => setRows(results)} setRows={setRows}/>
                <List modalConfirmDeleteFunction={handleModalDelete} rows={rows}/>
            </View>
            <ModalConfirmDelete isVisible={modalDeleteVisible} handleFunction={handleModalDelete} />
        </View>
    )
}

// import { Text } from "react-native";

// export default function Panel(){
//     return <Text>Panel</Text>
// }