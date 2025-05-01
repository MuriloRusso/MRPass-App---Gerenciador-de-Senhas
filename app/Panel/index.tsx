import { ScrollView, Text, View } from "react-native";
import Header from "./templates/Header";
import Search from "./templates/Search";
import List from "./templates/List";
import ModalCreate from "./templates/ModalCreate";
import ModalConfirmDelete from "./templates/ModalConfirmDelete";
import useModals from "./hooks/useModals";

export default function Panel(){
    
    const {modalDeleteVisible, handleModalDelete} = useModals();


    return (
        <View>


            
            <View style={{height: "100%"/* flex: 1*/}}>
                <Header/>
                <Search/>
                <List modalConfirmDeleteFunction={handleModalDelete}/>
                {/* <ModalCreate/> */}
            </View>
                <ModalConfirmDelete isVisible={modalDeleteVisible} handleFunction={handleModalDelete} />

        </View>
    )
}