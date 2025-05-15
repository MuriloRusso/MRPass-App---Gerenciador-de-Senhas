import { RegisterDataProps } from "@/types/register";
import { useEffect, useState } from "react";

export default function useFields() {
  const [registerData, setRegisterData] = useState<RegisterDataProps>({
    plataform: {
      error: false,
      placeholder: "Nome da Plataforma...",
      errorText: "* Campo obrigatório",
      value: "",
    },
    link: {
      error: false,
      placeholder: "Link...",
      errorText: "* Campo obrigatório",
      value: "",
    },
    user: {
      error: false,
      placeholder: "Usuário...",
      errorText: "* Campo obrigatório",
      value: "",
    },
    password: {
      error: false,
      placeholder: "Senha...",
      errorText: "* Campo obrigatório",
      value: "",
    },
    description: {
      error: false,
      placeholder: "Descrição...",
      errorText: "* Campo obrigatório",
      value: "",
    },
  });

  // PLATAFORM
  const handleChangePlataformValue = (newValue: string) => {
    setRegisterData((prev) => ({
      ...prev,
      plataform: {
        ...prev.plataform,
        value: newValue,
      },
    }));
  };

  const handleChangePlataformError = (hasError: boolean) => {
    setRegisterData((prev) => ({
      ...prev,
      plataform: {
        ...prev.plataform,
        error: hasError,
      },
    }));
  };

  // LINK
  const handleChangeLinkValue = (newValue: string) => {
    setRegisterData((prev) => ({
      ...prev,
      link: {
        ...prev.link,
        value: newValue,
      },
    }));
  };

  const handleChangeLinkError = (hasError: boolean) => {
    setRegisterData((prev) => ({
      ...prev,
      link: {
        ...prev.link,
        error: hasError,
      },
    }));
  };

  // USER
  const handleChangeUserValue = (newValue: string) => {
    setRegisterData((prev) => ({
      ...prev,
      user: {
        ...prev.user,
        value: newValue,
      },
    }));
  };

  const handleChangeUserError = (hasError: boolean) => {
    setRegisterData((prev) => ({
      ...prev,
      user: {
        ...prev.user,
        error: hasError,
      },
    }));
  };

  // PASSWORD
  const handleChangePasswordValue = (newValue: string) => {
    setRegisterData((prev) => ({
      ...prev,
      password: {
        ...prev.password,
        value: newValue,
      },
    }));
  };

  const handleChangePasswordError = (hasError: boolean) => {
    setRegisterData((prev) => ({
      ...prev,
      password: {
        ...prev.password,
        error: hasError,
      },
    }));
  };

  // DESCRIPTION
  const handleChangeDescriptionValue = (newValue: string) => {
    setRegisterData((prev) => ({
      ...prev,
      description: {
        ...prev.description,
        value: newValue,
      },
    }));
  };

  const handleChangeDescriptionError = (hasError: boolean) => {
    setRegisterData((prev) => ({
      ...prev,
      description: {
        ...prev.description,
        error: hasError,
      },
    }));
  };

  useEffect(() => {
    console.log("registerData");
    console.log(registerData);
  }, [registerData]);

  return {
    registerData,
    handleChangePlataformValue,
    handleChangePlataformError,
    handleChangeLinkValue,
    handleChangeLinkError,
    handleChangeUserValue,
    handleChangeUserError,
    handleChangePasswordValue,
    handleChangePasswordError,
    handleChangeDescriptionValue,
    handleChangeDescriptionError,
  };
}
