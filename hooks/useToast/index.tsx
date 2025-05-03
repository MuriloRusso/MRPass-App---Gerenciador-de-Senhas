import { GlobalContext } from "@/contexts/GlobalContext";
import { ToastProps } from "@/types/toast";
import { useContext } from "react";

export default function useToast() {
  const { alerts, setAlerts } = useContext(GlobalContext);

  const handleAddToast = (newToast: Omit<ToastProps, 'id'>) => {
    const id = `${Date.now()}-${Math.random()}`; // ID único
    const toastWithId: ToastProps = { ...newToast, id };

    setAlerts(prev => [...prev, toastWithId]);

    setTimeout(() => {
      setAlerts(prev => prev.filter(alert => alert.id !== id));
    }, 3000);
  };

  return {
    alerts,
    handleAddToast,
  };
}
