import ButtonPrimary from "@/components/ButtonPrimary";
import { Folder } from "@/types/folder";
import useDelete from "../../hooks/useDelete";

export default function ButtonDelete({selectedItem}:{selectedItem:Folder | null}){
    const {drop} = useDelete();
    const handleConfirm = () => {
        selectedItem && drop(Number(selectedItem.id))
    }
    return <ButtonPrimary text='Confirmar' onClick={handleConfirm} />
}