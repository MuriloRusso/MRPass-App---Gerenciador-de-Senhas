import { View } from "react-native";
// import ModalCreate from "./templates/ModalCreate";
import useModals from "./hooks/useModals";
import Header from "./templates/Header";
import List from "./templates/List";
import Search from "./templates/Search";

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
            {/* <ModalConfirmDelete isVisible={modalDeleteVisible} handleFunction={handleModalDelete} /> */}
        </View>
    )
}

// import { Text } from "react-native";

// export default function Panel(){
//     return <Text>Panel</Text>
// }