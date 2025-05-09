import useLoading from '@/hooks/useLoading';
import { ToastProps } from '@/types/toast';
import React, { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react';

type GlobalContextData = {
    alerts: ToastProps[];
    setAlerts: Dispatch<SetStateAction<ToastProps[]>>;
    loading: boolean;
    // setLoading: Dispatch<SetStateAction<boolean>>;
    handleVisibleLoading: (value:boolean) => void;
};

export const GlobalContext = createContext<GlobalContextData>({} as GlobalContextData);

export function GlobalProvider({ children }: { children: ReactNode }) {

  const [alerts, setAlerts ] = useState<ToastProps[]>([]);

  const {loading, handleVisibleLoading} = useLoading();

  // const [loading, setLoading ] = useState<boolean>(true);

  useEffect(()=>{
    console.log('context');
    console.log(loading);
    
  }, [loading])

  return (
    <GlobalContext.Provider value={{alerts, setAlerts, loading, handleVisibleLoading }}>
      {children}
    </GlobalContext.Provider>
  );
}
