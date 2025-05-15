import { useState } from "react";

export default function useModals(){

    const [modalDeleteVisible, setModalDeleteVisible] = useState(false);
    const handleModalDelete = () => {
        setModalDeleteVisible(!modalDeleteVisible);
    }
    
    const [modalCreateVisible, setModalCreateVisible] = useState(false);
    const handleModalCreate = () => {
        setModalCreateVisible(!modalCreateVisible);
    }

    return {modalDeleteVisible, handleModalDelete, modalCreateVisible, handleModalCreate}
}