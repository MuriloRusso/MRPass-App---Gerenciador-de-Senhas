import { AuthContext } from "@/contexts/AuthContext";
import { GlobalContext } from "@/contexts/GlobalContext";
import useToast from "@/hooks/useToast";
import { RegisterDataProps } from "@/types/register";
import { useContext } from "react";

type CreateProps = {
  plataform: string;
  descricao: string;
  link: string;
  user: string;
  password: string;
};

export default function useCreate(handleModalCreate: () => void, fetchData: () => void, handleChangeError: (field: keyof RegisterDataProps, hasError: boolean) => void) {

  const { user } = useContext(AuthContext);

  const { handleAddToast } = useToast();

  const { handleVisibleLoading, selectFolder } = useContext(GlobalContext);
  
  const fetchCreate = async (data: CreateProps) => {

    if(selectFolder === null){
      return
    }

    let fieldsErrors = false;

    if (!data.plataform) {
      handleChangeError('plataform', true);
      fieldsErrors = true;
    }
    // if (!data.descricao) {
    //   handleChangeError('description', true);
    //   fieldsErrors = true;
    // }
    // if (!data.link) {
    //   handleChangeError('link', true);
    //   fieldsErrors = true;
    // }
    if (!data.user) {
      handleChangeError('user', true);
      fieldsErrors = true;
    }
    if (!data.password) {
      handleChangeError('password', true);
      fieldsErrors = true;
    }

    if (!fieldsErrors) {
      const formData = new FormData();
      formData.append("id", selectFolder.id);
      formData.append("title", data.plataform);
      formData.append("description", data.descricao);
      formData.append("link", data.link);
      formData.append("user", data.user);
      formData.append("password", data.password);

      try {
        const route = "https://mrpass.shop/api/register/create.php";
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
        console.error("Erro ao criar registro:", error);
        handleAddToast({
          message: "Erro ao criar registro. Tente novamente.",
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
