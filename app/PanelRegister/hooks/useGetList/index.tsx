import { AuthContext } from "@/contexts/AuthContext";
import { GlobalContext } from "@/contexts/GlobalContext";
import { Register } from "@/types/register";
import { useContext, useState } from "react";

export default function useGetList() {
  const [registers, setRegisters] = useState<Register[]>([]);
  const { user } = useContext(AuthContext);
  const { handleVisibleLoading } = useContext(GlobalContext);

  const fetchData = async () => {
    handleVisibleLoading(true);
    try {
      const route = "https://mrpass.shop/api/register/search.php?id=10&search=";
      const response = await fetch(route, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      });

      const data = await response.json();
      if (data?.itens) {
        setRegisters(data.itens);
      } else {
        setRegisters([]);
      }
    } catch (error) {
      console.error("Erro ao buscar pastas:", error);
      setRegisters([]);
    }
    handleVisibleLoading(false);
  };

  return { registers, setRegisters, fetchData };
}
