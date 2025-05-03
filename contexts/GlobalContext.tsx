import { ToastProps } from '@/types/toast';
import React, { createContext, ReactNode, useState } from 'react';
// import axios from 'axios';
// import Toast from 'react-native-toast-message';


type GlobalContextData = {
    alerts: ToastProps[]
};

// const GlobalContext = createContext<GlobalContextData>({} as GlobalContextData);
export const GlobalContext = createContext<GlobalContextData>({} as GlobalContextData);


export function GlobalProvider({ children }: { children: ReactNode }) {

const [alerts, setAlerts ] = useState<ToastProps[]>([
    {
        message: "Não foi possivel completar sua solicitação",
        type: "success"
    },
    {
        message: "Não foi possivel completar sua solicitação",
        type: "error"
    },
    {
        message: "Não foi possivel completar sua solicitação",
        type: "warning"
    },
    {
        message: "Não foi possivel completar sua solicitação",
        type: "info"
    }
    ]);


  return (
    <GlobalContext.Provider value={{alerts}}>
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