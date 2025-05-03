import { ToastProps } from '@/types/toast';
import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

type GlobalContextData = {
    alerts: ToastProps[];
    setAlerts: Dispatch<SetStateAction<ToastProps[]>>;
};

export const GlobalContext = createContext<GlobalContextData>({} as GlobalContextData);

export function GlobalProvider({ children }: { children: ReactNode }) {

  const [alerts, setAlerts ] = useState<ToastProps[]>([]);
  return (
    <GlobalContext.Provider value={{alerts, setAlerts}}>
      {children}
    </GlobalContext.Provider>
  );
}
