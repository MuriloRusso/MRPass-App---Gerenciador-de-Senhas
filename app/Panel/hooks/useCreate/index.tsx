import { AuthContext } from "@/contexts/AuthContext";
import useToast from "@/hooks/useToast";
import { useContext } from "react";
import useFields from "../useFields";
// import useGetList from "../useGetList";

export default function useCreate(handleModalCreate: () => void, fetchData: () => void){

    const {user} = useContext(AuthContext);
    const {handleAddToast} = useToast();
    const {folderData, handleChangeNameError, handleChangeDescriptionError} = useFields();
    // const { fetchData } = useGetList();
    // const {handleModalCreate} = useModals();

    const create = async ({nome, descricao}: {nome:string, descricao:string}) => {
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
                    });
                    const data = await response.json();
                    console.log('data');
                    console.log(data);

                    handleAddToast({
                        message: data.message,
                        type: "success"
                    });

                    handleModalCreate();
                    fetchData();

            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            }
        }
    };

    return {create}
}