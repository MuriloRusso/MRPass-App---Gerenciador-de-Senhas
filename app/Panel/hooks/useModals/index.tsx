import { useEffect, useState } from "react";

export default function useModals(){

    const [modalDeleteVisible, setModalDeleteVisible] = useState(false);
    const handleModalDelete = () => {
        setModalDeleteVisible(!modalDeleteVisible);
    }
    
    const [modalCreateVisible, setModalCreateVisible] = useState(false);
    const handleModalCreate = () => {
        setModalCreateVisible(!modalCreateVisible);
    }
    useEffect(()=>{
        console.log('modalCreateVisible');
        console.log(modalCreateVisible);
        
    }, [modalCreateVisible])

    return {modalDeleteVisible, handleModalDelete, modalCreateVisible, handleModalCreate}
}