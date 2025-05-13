import { AuthContext } from "@/contexts/AuthContext";
import { Folder } from "@/types/folder";
import { useContext, useState } from "react";
import { GlobalContext } from "@/contexts/GlobalContext";

export default function useGetList() {
  const [folders, setFolders] = useState<Folder[]>([]);
  const { user } = useContext(AuthContext);
  const { handleVisibleLoading } = useContext(GlobalContext);

  const fetchData = async () => {
    handleVisibleLoading(true);
    try {
      const route = "https://mrpass.shop/api/folders/search.php";
      const response = await fetch(route, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      });

      const data = await response.json();
      if (data?.folders) {
        setFolders(data.folders);
      } else {
        setFolders([]);
      }
    } catch (error) {
      console.error("Erro ao buscar pastas:", error);
      setFolders([]);
    }
    handleVisibleLoading(false);
  };

  return { folders, setFolders, fetchData };
}
