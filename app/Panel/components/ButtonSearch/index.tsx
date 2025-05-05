import ButtonPrimaryIcon from "@/components/ButtonPrimaryIcon";
import AntDesign from '@expo/vector-icons/AntDesign';

function ButtonIcon (){
    return <AntDesign name="search1" size={24} color="white" />
} 

export default function ButtonSearch({searchText, setRows}:{searchText:string, setRows:any}){
    // const {search} = useGetBySearch();

    const search = async (searchText:string) => {
        try {
            const route = 'https://mrpass.shop/api/folders/search.php?search=' + encodeURIComponent(searchText);
            const response = await fetch(route, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${4}`,
              },
        });

        const data = await response.json();
        console.log("Dados recebidos:", data);

        if (data?.folders) {
            setRows(data.folders);
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