import useLoading from '@/hooks/useLoading';
import { Folder } from '@/types/folder';
import { ToastProps } from '@/types/toast';
import React, { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react';

type GlobalContextData = {
    alerts: ToastProps[];
    setAlerts: Dispatch<SetStateAction<ToastProps[]>>;
    loading: boolean;
    handleVisibleLoading: (value:boolean) => void;
    selectFolder: Folder | null;
    setSelectedFolder: Dispatch<SetStateAction<Folder | null>>;
};

export const GlobalContext = createContext<GlobalContextData>({} as GlobalContextData);

export function GlobalProvider({ children }: { children: ReactNode }) {

  const [alerts, setAlerts ] = useState<ToastProps[]>([]);

  const {loading, handleVisibleLoading} = useLoading();

  const [ selectFolder, setSelectedFolder ] = useState<Folder | null>(null);

  useEffect(()=>{
    console.log('selectFolder');
    console.log(selectFolder);    
  }, [selectFolder])

  return (
    <GlobalContext.Provider value={{alerts, setAlerts, loading, handleVisibleLoading, selectFolder, setSelectedFolder }}>
      {children}
    </GlobalContext.Provider>
  );
}
