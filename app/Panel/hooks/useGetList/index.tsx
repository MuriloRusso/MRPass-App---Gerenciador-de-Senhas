import { AuthContext } from "@/contexts/AuthContext";
import { Folder } from "@/types/folder";
import { useContext, useEffect, useState } from "react";

export default function useGetList() {
  // const {folders, setFolders} = useFields();

  const [folders, setFolders] = useState<Folder[]>([]);

  const {user} = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const route = "https://mrpass.shop/api/folders/search.php";
        const response = await fetch(route, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        });

        const data = await response.json();
        console.log("Dados recebidos:", data);

        if (data?.folders) {
          setFolders(data.folders);
        } else {
          console.warn("Nenhuma pasta encontrada");
          setFolders([]); // garante um array mesmo se vazio
        }
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
        setFolders([]); // evita quebra da FlatList
      }
    };

    fetchData();
  }, []);

  return { folders, setFolders };
}
