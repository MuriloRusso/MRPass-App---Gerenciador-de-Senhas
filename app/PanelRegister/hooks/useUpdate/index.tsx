import { AuthContext } from "@/contexts/AuthContext";
import { GlobalContext } from "@/contexts/GlobalContext";
import useToast from "@/hooks/useToast";
import { useContext } from "react";
import useFields from "../useFields";

export default function useUpdate(handleModalCreate: () => void, fetchData: () => void) {
  const { user } = useContext(AuthContext);
  const { handleAddToast } = useToast();
  const {
    handleChangePlataformError,
    handleChangeDescriptionError,
    handleChangeLinkError,
    handleChangeUserError,
    handleChangePasswordError,
  } = useFields();
  const { handleVisibleLoading } = useContext(GlobalContext);

  const update = async ({
    id,
    plataform,
    descricao,
    link,
    user: username,
    password,
  }: {
    id: number;
    plataform: string;
    descricao: string;
    link: string;
    user: string;
    password: string;
  }) => {
    handleVisibleLoading(true);
    let fieldsErros = false;

    if (!plataform) {
      handleChangePlataformError(true);
      fieldsErros = true;
    }
    if (!descricao) {
      handleChangeDescriptionError(true);
      fieldsErros = true;
    }
    if (!link) {
      handleChangeLinkError(true);
      fieldsErros = true;
    }
    if (!username) {
      handleChangeUserError(true);
      fieldsErros = true;
    }
    if (!password) {
      handleChangePasswordError(true);
      fieldsErros = true;
    }

    if (!fieldsErros) {
      let formData = new FormData();
      formData.append("id", id.toString());
      formData.append("plataform", plataform);
      formData.append("descricao", descricao);
      formData.append("link", link);
      formData.append("user", username);
      formData.append("password", password);

      try {
        const route = "https://mrpass.shop/api/register/update.php";
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
