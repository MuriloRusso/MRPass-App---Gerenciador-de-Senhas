import { useEffect } from "react";
import useFields from "../useFields";

export default function useGetList() {
  const {rows, setRows} = useFields();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const route = "https://mrpass.shop/api/folders/search.php";
        const response = await fetch(route, {
          method: "GET",
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

    fetchData();
  }, []);

  return { rows, setRows };
}
