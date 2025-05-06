import ButtonPrimary from "@/components/ButtonPrimary";
import { FolderDataProps } from "@/types/folder";
import useCreate from "../../hooks/useCreate";

export default function ButtonSubmit({data}:{data:FolderDataProps}){
    const {create} = useCreate();
    const handleCreate = () => {
        create({nome: data.name.value, descricao: data.description.value});
    }
    return <ButtonPrimary text='Criar Pasta' onClick={handleCreate}/>
}