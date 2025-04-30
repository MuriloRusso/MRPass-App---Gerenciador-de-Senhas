// LoadingContext.tsx
import Loading from '@/app/components/Loading';
import React, { createContext, ReactNode, useContext, useState } from 'react';
// import Loading from './../components/Loading'

interface LoadingContextData {
  isLoading: boolean;
  showLoading: () => void;
  hideLoading: () => void;
}

const LoadingContext = createContext<LoadingContextData>({} as LoadingContextData);

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);

  const showLoading = () => setIsLoading(true);
  const hideLoading = () => setIsLoading(false);

  return (
    <LoadingContext.Provider value={{ isLoading, showLoading, hideLoading }}>
      {children}
      {isLoading && <Loading />}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);