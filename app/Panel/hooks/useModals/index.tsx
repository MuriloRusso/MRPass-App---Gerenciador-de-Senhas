import { useState } from "react";

export default function useModals(){

    const [modalDeleteVisible, setModalDeleteVisible] = useState(false);

    // const handleModalDelete = (value: boolean) => {
    //     setModalDeleteVisible(value);
    // }
    const handleModalDelete = () => {
        setModalDeleteVisible(!modalDeleteVisible);
        console.log('aaa', modalDeleteVisible);
        
    }
    
    return {modalDeleteVisible, handleModalDelete}
}