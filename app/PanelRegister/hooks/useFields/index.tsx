import { FolderDataProps } from "@/types/folder";
import { InputProps } from "@/types/input";
import { useEffect, useState } from "react";

export default function useFields(){
    
    // const [rows, setRows] = useState<Folder[]>([]);
    // return {rows, setRows}

 
    const [ folderData, setFolderData ] = useState<FolderDataProps>({
        name: {
            error: false,
            placeholder: "Nome da Pasta...",
            errorText: "* Campo obrigatório",
            value: ""            
        },
        description: {
            error: false,
            placeholder: "Descrição...",
            errorText: "* Campo obrigatório",
            value: ""            
        }
    });

    const handleChangeNameValue = (newValue: string) => {
        setFolderData(prev => ({
        ...prev,
        name: {
            ...prev.name,
            value: newValue
        }
        }));
    };
    
    const handleChangeNameError = (hasError: boolean) => {
        setFolderData(prev => ({
        ...prev,
        name: {
            ...prev.name,
            error: hasError
        }
        }));
    };
    
    const handleChangeDescriptionValue = (newValue: string) => {
        setFolderData(prev => ({
        ...prev,
        description: {
            ...prev.description,
            value: newValue
        }
        }));
    };
    
    const handleChangeDescriptionError = (hasError: boolean) => {
        setFolderData(prev => ({
        ...prev,
        description: {
            ...prev.description,
            error: hasError
        }
        }));
    };

    useEffect(()=>{
        console.log('folderData');
        console.log(folderData);
        
    }, [folderData])

    return {folderData, handleChangeNameValue, handleChangeNameError, handleChangeDescriptionValue, handleChangeDescriptionError}
}