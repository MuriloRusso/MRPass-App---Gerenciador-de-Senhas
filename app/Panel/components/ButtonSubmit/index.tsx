import ButtonPrimary from "@/components/ButtonPrimary";
import { FolderDataProps } from "@/types/folder";

export default function ButtonSubmit({data, onClick}:{data:FolderDataProps; onClick: () => void;}){
    return(
        <ButtonPrimary text='Criar Pasta' onClick={onClick}/>
    )
}