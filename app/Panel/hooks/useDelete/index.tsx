// useDelete.ts
import { AuthContext } from "@/contexts/AuthContext";
import useToast from "@/hooks/useToast";
import { useContext } from "react";
import { GlobalContext } from "@/contexts/GlobalContext";

export default function useDelete(closeModal: () => void, fetchData: () => void) {
  const { handleAddToast } = useToast();
  const { user } = useContext(AuthContext);
  const { handleVisibleLoading } = useContext(GlobalContext);

  const drop = async (id: number) => {
    handleVisibleLoading(true);
    try {
      const route = "https://mrpass.shop/api/folders/delete.php";
      const response = await fetch(route, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
        body: JSON.stringify({ id }),
      });
      const data = await response.json();

      handleAddToast({ message: data.message, type: "success" });
      fetchData();
      closeModal();
    } catch (error) {
      console.error("Erro ao deletar pasta:", error);
    }
    handleVisibleLoading(false);
  };

  return { drop };
}
