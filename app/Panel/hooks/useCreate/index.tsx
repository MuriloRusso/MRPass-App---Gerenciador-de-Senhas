import { AuthContext } from "@/contexts/AuthContext";
import { GlobalContext } from "@/contexts/GlobalContext";
import useToast from "@/hooks/useToast";
import { FolderDataProps } from "@/types/folder";
import { useContext } from "react";
import useFields from "../useFields";

export default function useCreate(handleModalCreate: () => void, fetchData: () => void, handleChangeError: (field: keyof FolderDataProps, hasError: boolean) => void){

    const { user } = useContext(AuthContext);
    const { handleAddToast } = useToast();
    const { handleChangeNameError, handleChangeDescriptionError, } = useFields();
    const { handleVisibleLoading } = useContext(GlobalContext);

    const fetchCreate = async ({nome, descricao}: {nome:string, descricao:string}) => {
        let fieldsErros:boolean = false;
        if(!nome){
            // handleChangeNameError(true);
            handleChangeError('name', true);
            fieldsErros = true;
        }
        /*if(!descricao){
            // handleChangeDescriptionError(true);
            handleChangeError('description', true);
            fieldsErros = true;
        }*/
        if(fieldsErros){
            handleAddToast({ type: "error", message: "Preencha o campo E-mail" });
            return
        }


        // if(!fieldsErros){
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
                    });
                    const data = await response.json();
                    console.log('data');
                    console.log(data);

                    handleAddToast({
                        message: data.message,
                        type: "success"
                    });

                    fetchData();
                    handleModalCreate();

            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            }
        // }
    };

    const create = async({nome, descricao}: {nome:string, descricao:string}) => {
        handleVisibleLoading(true);
        await fetchCreate({nome, descricao});
        handleVisibleLoading(false);
    }

    return {create}
}