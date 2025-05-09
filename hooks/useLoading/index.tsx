import { GlobalContext } from "@/contexts/GlobalContext";
import { useContext } from "react";

export default function useLoading () {

    const { loading, setLoading } = useContext(GlobalContext);

    const handleVisibleLoading = (value:boolean) => {
        setLoading(value);
    }

    return{loading, handleVisibleLoading}
}