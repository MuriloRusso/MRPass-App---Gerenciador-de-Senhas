import ButtonPrimary from "@/components/ButtonPrimary";
import { FolderDataProps } from "@/types/folder";
import useCreate from "../../hooks/useCreate";

export default function ButtonSubmit({data}:{data:FolderDataProps}){

    const {create} = useCreate();

    const handleCreate = () => {
    console.log('creating...');
    // console.log(data);
    // console.log('folderData');
    // console.log(folderData);    
        create({nome: data.name.value, descricao: data.description.value});

    // create({nome: folderData.name.value, descricao: folderData.description.value});

    }

    return(
        <ButtonPrimary text='Criar Pasta' onClick={handleCreate}/>
    )
}