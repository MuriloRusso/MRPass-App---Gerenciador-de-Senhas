import { AuthContext } from "@/contexts/AuthContext";
import useToast from "@/hooks/useToast";
import { useContext } from "react";
import useFields from "../useFields";

export default function useCreate(){

    const {user} = useContext(AuthContext);

    const {handleAddToast} = useToast();

    const {folderData, handleChangeNameError, handleChangeDescriptionError} = useFields();

    const create = async ({nome, descricao}: {nome:string, descricao:string}) => {

        console.log(nome, descricao);
        

        let fieldsErros:boolean = false;

        if(!nome){
            handleChangeNameError(true);
            fieldsErros = true;
        }
        if(!descricao){
            handleChangeDescriptionError(true);
            fieldsErros = true;

        }

        if(!fieldsErros){    
            let formData = new FormData();
            formData.append('nome', nome);
            formData.append('descricao', descricao);
            try {
                const route = 'https://mrpass.shop/api/folders/create.php';
                const response = await fetch(route, {
                    method: "POST",                
                    headers: {
                        Authorization: `Bearer ${user?.token}`,
                    },
                    body: formData,
                }).then((data)=>{
                    handleAddToast({
                        // message: data.message.toString(),
                        message: 'data.message.toString()',
                        type: "success"
                    });
                    
                });
            } catch (error) {
            console.error("Erro ao buscar dados:", error);
            // setRows([]); // evita quebra da FlatList
            }
        }
    };

    return {create}
}