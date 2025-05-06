import ButtonPrimary from "@/components/ButtonPrimary";
import { FolderDataProps } from "@/types/folder";
import useCreate from "../../hooks/useCreate";

export default function ButtonSubmit({data,  handleModalCreate}:{data:FolderDataProps; handleModalCreate: () => void;}){
    const {create} = useCreate(handleModalCreate);
    const handleCreate = () => {
        create({nome: data.name.value, descricao: data.description.value});
        // handleModalCreate();
    }
    return <ButtonPrimary text='Criar Pasta' onClick={handleCreate}/>
}