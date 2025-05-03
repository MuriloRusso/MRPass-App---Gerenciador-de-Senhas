import { InputProps } from '@/types/input';
import React, { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';
// import axios from 'axios';
// import Toast from 'react-native-toast-message';
import useToast from '@/hooks/useToast';
import { useRouter } from 'expo-router';

type UserData = {
  email: InputProps;
  password: InputProps ;
};

type AuthContextData = {
  isAuthenticated: boolean;
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
  userData: UserData;
  handleEmailChange: (value: string) => void;
  handleEmailError: (error: boolean, errorText?: string) => void;
  handlePasswordChange: (value: string) => void;
  handlePasswordError: (error: boolean, errorText?: string) => void;
  clearErrors: () => void;
  signIn: () => void;
  signOut: () => void;
};

// const AuthContext = createContext<AuthContextData>({} as AuthContextData);
export const AuthContext = createContext<AuthContextData>({} as AuthContextData);


export function AuthProvider({ children }: { children: ReactNode }) {

  const router = useRouter();

  const [ isAuthenticated, setIsAuthenticated ] = useState<boolean>(false);

  const {handleAddToast, alerts} = useToast();

  const [userData, setUserData] = useState<UserData>({
    email: {
      value: '',
      placeholder: 'E-mail',
      error: false,
      errorText: '* Campo obrigatório'
    },
    password: {
      value: '',
      placeholder: 'Senha',
      error: false,
      errorText: '* Campo obrigatório'
    }
  });

  // Atualiza o valor do email
  const handleEmailChange = (value: string) => {
    setUserData(prev => ({
      ...prev,
      email: {
        ...prev.email,
        value,
        error: false, // Remove o erro ao digitar
        errorText: '' // Limpa a mensagem de erro
      }
    }));
  };

  // Atualiza o erro do email
  const handleEmailError = (error: boolean, errorText: string = '') => {
    setUserData(prev => ({
      ...prev,
      email: {
        ...prev.email,
        error,
        errorText
      }
    }));
  };

  // Atualiza o valor do password
  const handlePasswordChange = (value: string) => {
    setUserData(prev => ({
      ...prev,
      password: {
        ...prev.password,
        value,
        error: false, // Remove o erro ao digitar
        errorText: '' // Limpa a mensagem de erro
      }
    }));
  };

  // Atualiza o erro do password
  const handlePasswordError = (error: boolean, errorText: string = '') => {
    setUserData(prev => ({
      ...prev,
      password: {
        ...prev.password,
        error,
        errorText
      }
    }));
  };

  // Limpa todos os erros
  const clearErrors = () => {
    setUserData(prev => ({
      email: {
        ...prev.email,
        error: false,
        errorText: ''
      },
      password: {
        ...prev.password,
        error: false,
        errorText: ''
      }
    }));
  };


  const signIn = async() => {

    clearErrors();
    let fieldErros:boolean = false;

    if(!userData.email.value){
        handleEmailError(true);
        handleAddToast({type: "error", message:"Preencha o campo E-mail"});
        fieldErros = true;
    }
    if(!userData.password.value){
        handlePasswordError(true);
        handleAddToast({type: "error", message:"Preencha o campo Senha"});
        fieldErros = true;
    }

    if(!fieldErros){

        // const api = axios.create({
        //     baseURL: 'https://mrpass.shop/api/',
        //     timeout: 25000,
        //     headers: {
        //       'Content-Type': 'application/json',
        //       'Accept': 'application/json'

        //     },
        // });

        // try {
        //     console.log({
        //         username: userData.email.value,
        //         password: userData.password.value
        //     });

        //     const response = await api.post('login.php', {
        //       username: userData.email.value,
        //       password: userData.password.value
        //     });
            
        //     return response.data;
            
        // } catch (error) {
        // console.log(error);
        // throw error;
        // }

        try {
          const route = 'https://mrpass.shop/api/';
  
          let formData = new FormData();
          formData.append('username', userData.email.value);
          formData.append('password', userData.password.value);
  
          let myResponse = fetch(`${route}login.php`, {
              method: 'POST',
              body: formData,
          })
          .then((response) => {
              response.json().then((data) => {
                  if(response.status === 200){
                      setIsAuthenticated(true);
                      router.push('./Panel');
                      handleAddToast({type: "success", message: "Você entrou com sucesso!"})
                  }
                  else{
                      handleAddToast({type: "error", message: data.message});
                  }
              })
          })
          
        } catch (error) {
          handleAddToast({type: "error", message: "Erro na requisição"});
          console.log(error);
        }
    }
  }

  const signOut = () => {
    setIsAuthenticated(false);
    handleAddToast({type: "info", message: "Você saiu do sistema."});

    router.push('/');
  }

  return (
    <AuthContext.Provider value={{
      isAuthenticated,
      setIsAuthenticated,
      userData, 
      handleEmailChange, 
      handleEmailError,
      handlePasswordChange,
      handlePasswordError,
      clearErrors,
      signIn,
      signOut
    }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook personalizado para usar o contexto
export function useAuth() {
  const context = useContext(AuthContext);
  
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  
  return context;
}