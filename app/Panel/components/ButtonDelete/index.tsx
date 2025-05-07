import ButtonPrimary from "@/components/ButtonPrimary";
import { Folder } from "@/types/folder";
import useDelete from "../../hooks/useDelete";

type ButtonDeleteProps = {
    selectedItem:Folder | null;
    closeModalFunction: () => void;
    fetchData: () => void;
}

export default function ButtonDelete({selectedItem, closeModalFunction, fetchData}:ButtonDeleteProps){
    const {drop} = useDelete(closeModalFunction, fetchData);
    const handleConfirm = () => {
        selectedItem && drop(Number(selectedItem.id))
    }
    return <ButtonPrimary text='Confirmar' onClick={handleConfirm} />
}