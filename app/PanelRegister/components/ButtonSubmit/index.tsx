import ButtonPrimary from "@/components/ButtonPrimary";
import { Folder, FolderDataProps } from "@/types/folder";
import useCreate from "../../hooks/useCreate";
import useUpdate from "../../hooks/useUpdate";

type ButtonSubmitProps = {
    data:FolderDataProps;
    handleModalCreate: () => void;
    selectedItem: Folder | null;
    fetchData: () => void;
}

export default function ButtonSubmit({data,  handleModalCreate, selectedItem, fetchData}:ButtonSubmitProps){
    const {create} = useCreate(handleModalCreate, fetchData);
    const {update} = useUpdate(handleModalCreate, fetchData);

    const handleSubmit = () => {
        selectedItem === null ?
        create({nome: data.name.value, descricao: data.description.value}) :
        update({id: Number(selectedItem.id), nome: data.name.value, descricao: data.description.value});
    }

    return <ButtonPrimary text={selectedItem === null ? 'Criar Pasta' : 'Atualizar Pasta'} onClick={handleSubmit}/>
}