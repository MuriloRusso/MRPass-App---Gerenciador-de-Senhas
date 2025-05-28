import ButtonPrimaryIcon from "@/components/ButtonPrimaryIcon";
import { AuthContext } from "@/contexts/AuthContext";
import { GlobalContext } from "@/contexts/GlobalContext";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useContext } from "react";

function ButtonIcon (){
    return <AntDesign name="search1" size={24} color="white" />
} 

export default function ButtonSearch({searchText, setRows}:{searchText:string, setRows:any}){

    const {user} = useContext(AuthContext);
    const { selectFolder } = useContext(GlobalContext);
    
    const search = async (searchText:string) => {
        try {
            const route = `https://mrpass.shop/api/register/search.php?id='${selectFolder?.id}'&search=` + encodeURIComponent(searchText);
            const response = await fetch(route, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${user?.token}`,
              },
        });

        const data = await response.json();
        console.log("Dados recebidos:", data);

        if (data?.itens) {
            setRows(data.itens);
        } else {
            console.warn("Nenhuma pasta encontrada");
            setRows([]); // garante um array mesmo se vazio
        }
        } catch (error) {
        console.error("Erro ao buscar dados:", error);
        setRows([]); // evita quebra da FlatList
        }
    };

    
      
    const handleSearch = () => {
        search(searchText);
    }

    return <ButtonPrimaryIcon text="" icon={ButtonIcon} onClick={handleSearch} />
}