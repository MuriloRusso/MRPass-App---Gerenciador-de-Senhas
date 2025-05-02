import { View } from "react-native";
import Header from "./templates/Header";
import Search from "./templates/Search";
import List from "./templates/List";
import ModalCreate from "./templates/ModalCreate";
import ModalConfirmDelete from "./templates/ModalConfirmDelete";
import useModals from "./hooks/useModals";

export default function Panel(){
    
    const {modalDeleteVisible, handleModalDelete} = useModals();
    // const [ serach ]
    return (
        <View>            
            <View style={{height: "100%"}}>
                <Header/>
                <Search />
                <List modalConfirmDeleteFunction={handleModalDelete}/>
            </View>
            {/* <ModalCreate/> */}
            <ModalConfirmDelete isVisible={modalDeleteVisible} handleFunction={handleModalDelete} />
        </View>
    )
}