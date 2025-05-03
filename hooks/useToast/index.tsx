import { GlobalContext } from "@/contexts/GlobalContext";
import { useContext } from "react";

export default function useToast(){
    const { alerts } = useContext(GlobalContext);
    return{alerts}
}