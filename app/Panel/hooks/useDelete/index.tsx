import { AuthContext } from "@/contexts/AuthContext";
import useToast from "@/hooks/useToast";
import { useContext } from "react";

export default function useDelete(/*{closeModal}:{closeModal: () => void;}*/){
    const {handleAddToast} = useToast();
    // const {handleModalDelete} = useModals();
    const {user} = useContext(AuthContext);
    const drop = async (id:number) => {
        try {
            const route = 'https://mrpass.shop/api/folders/delete.php';
            const response = await fetch(route, {
                    method: "DELETE",                
                    headers: {
                        Authorization: `Bearer ${user?.token}`,
                    },
                    body: JSON.stringify({"id": id}),
                });
                const data = await response.json();

                handleAddToast({
                    message: data.message,
                    type: "success"
                });
                // closeModal();

        } catch (error) {
            console.error("Erro ao buscar dados:", error);
        }
        
    }

    return {drop}
}