import { AuthContext } from "@/contexts/AuthContext";
import { useContext } from "react";

export default function useCreate(){

    const {user} = useContext(AuthContext);

    const create = async () => {

        let formData = new FormData();
          formData.append('nome', 'teste app');
          formData.append('descricao', 'teste app');
  
        try {
            const route = 'https://mrpass.shop/api/folders/create.php';
            const response = await fetch(route, {
                method: "POST",                
                headers: {
                    Authorization: `Bearer ${user?.token}`,
                },
                body: formData,
            });
        } catch (error) {
        console.error("Erro ao buscar dados:", error);
        // setRows([]); // evita quebra da FlatList
        }
    };

    return {create}
}