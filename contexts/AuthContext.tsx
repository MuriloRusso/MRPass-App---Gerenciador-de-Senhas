import { Input } from '@/types/input';
import React, { createContext, useContext, useState, ReactNode } from 'react';

type UserData = {
  email: Input;
  password: Input;
};

type AuthContextData = {
  userData: UserData;
  handleEmailChange: (value: string) => void;
  handleEmailError: (error: boolean, errorText?: string) => void;
  handlePasswordChange: (value: string) => void;
  handlePasswordError: (error: boolean, errorText?: string) => void;
  clearErrors: () => void;
  signIn: ()=> void;
};

// const AuthContext = createContext<AuthContextData>({} as AuthContextData);
export const AuthContext = createContext<AuthContextData>({} as AuthContextData);


export function AuthProvider({ children }: { children: ReactNode }) {
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
    if(!userData.email.value){
        handleEmailError(true);
    }
    if(!userData.password.value){
        handlePasswordError(true);
    }
  }


  return (
    <AuthContext.Provider value={{ 
      userData, 
      handleEmailChange, 
      handleEmailError,
      handlePasswordChange,
      handlePasswordError,
      clearErrors,
      signIn
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