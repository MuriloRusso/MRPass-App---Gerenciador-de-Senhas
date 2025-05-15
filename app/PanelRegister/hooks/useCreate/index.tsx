import { AuthContext } from "@/contexts/AuthContext";
import { GlobalContext } from "@/contexts/GlobalContext";
import useToast from "@/hooks/useToast";
import { useContext } from "react";
import useFields from "../useFields";

type CreateProps = {
  plataform: string;
  descricao: string;
  link: string;
  user: string;
  password: string;
};

export default function useCreate(handleModalCreate: () => void, fetchData: () => void) {
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

  const fetchCreate = async ({ plataform, descricao, link, /*user,*/ password }: CreateProps) => {
    let fieldsErrors = false;

    if (!plataform) {
      handleChangePlataformError(true);
      fieldsErrors = true;
    }
    if (!descricao) {
      handleChangeDescriptionError(true);
      fieldsErrors = true;
    }
    if (!link) {
      handleChangeLinkError(true);
      fieldsErrors = true;
    }
    if (!user) {
      handleChangeUserError(true);
      fieldsErrors = true;
    }
    if (!password) {
      handleChangePasswordError(true);
      fieldsErrors = true;
    }

    if (!fieldsErrors) {
      const formData = new FormData();
      formData.append("nome", plataform); // API ainda espera "nome"
      formData.append("descricao", descricao);
      formData.append("link", link);
    //   formData.append("user", user);
      formData.append("password", password);

      try {
        const route = "https://mrpass.shop/api/folders/create.php";
        const response = await fetch(route, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
          body: formData,
        });

        const data = await response.json();
        console.log("data", data);

        handleAddToast({
          message: data.message,
          type: "success",
        });

        fetchData();
        handleModalCreate();
      } catch (error) {
        console.error("Erro ao criar pasta:", error);
        handleAddToast({
          message: "Erro ao criar pasta. Tente novamente.",
          type: "error",
        });
      }
    }
  };

  const create = async (data: CreateProps) => {
    handleVisibleLoading(true);
    await fetchCreate(data);
    handleVisibleLoading(false);
  };

  return { create };
}
