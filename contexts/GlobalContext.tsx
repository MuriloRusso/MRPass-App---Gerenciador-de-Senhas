import { ToastProps } from '@/types/toast';
import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';
// import axios from 'axios';
// import Toast from 'react-native-toast-message';


type GlobalContextData = {
    alerts: ToastProps[];
    setAlerts: Dispatch<SetStateAction<ToastProps[]>>;
};

// const GlobalContext = createContext<GlobalContextData>({} as GlobalContextData);
export const GlobalContext = createContext<GlobalContextData>({} as GlobalContextData);


export function GlobalProvider({ children }: { children: ReactNode }) {

  const [alerts, setAlerts ] = useState<ToastProps[]>([
    // {
    //     message: "Não foi possivel completar sua solicitação",
    //     type: "success"
    // },
    // {
    //     message: "Não foi possivel completar sua solicitação",
    //     type: "error"
    // },
    // {
    //     message: "Não foi possivel completar sua solicitação",
    //     type: "warning"
    // },
    // {
    //     message: "Não foi possivel completar sua solicitação",
    //     type: "info"
    // }
  ]);


  return (
    <GlobalContext.Provider value={{alerts, setAlerts}}>
      {children}
    </GlobalContext.Provider>
  );
}

// Hook personalizado para usar o contexto
// export function useGlobal() {
//   const context = useContext(GlobalContext);
  
//   if (!context) {
//     throw new Error('useGlobal must be used within an GlobalProvider');
//   }
  
//   return context;
// }