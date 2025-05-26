import { AuthContext } from "@/contexts/AuthContext";
import { GlobalContext } from "@/contexts/GlobalContext";
import useToast from "@/hooks/useToast";
import { FolderDataProps } from "@/types/folder";
import { useContext } from "react";
import useFields from "../useFields";

export default function useUpdate(handleModalCreate: () => void, fetchData: () => void, handleChangeError: (field: keyof FolderDataProps, hasError: boolean) => void) {
  const { user } = useContext(AuthContext);
  const { handleAddToast } = useToast();
  const { handleChangeNameError, handleChangeDescriptionError } = useFields();
  const { handleVisibleLoading } = useContext(GlobalContext);

  const update = async ({ id, nome, descricao }: { id: number; nome: string; descricao: string }) => {
    handleVisibleLoading(true);
    let fieldsErros = false;

    if (!nome) {
      // handleChangeNameError(true);
      handleChangeError('name', true);
      fieldsErros = true;
    }
    /*if (!descricao) {
      handleChangeDescriptionError(true);
      fieldsErros = true;
    }*/

    if (!fieldsErros) {
      let formData = new FormData();
      formData.append("id", id.toString());
      formData.append("nome", nome);
      formData.append("descricao", descricao);
      try {
        const route = "https://mrpass.shop/api/folders/update.php";
        const response = await fetch(route, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
          body: formData,
        });
        const data = await response.json();

        handleAddToast({ message: data.message, type: "success" });
        fetchData();
        handleModalCreate();
      } catch (error) {
        console.error("Erro ao atualizar pasta:", error);
      }
    }
    handleVisibleLoading(false);
  };

  return { update };
}
