import { GlobalContext } from "@/contexts/GlobalContext";
import { useContext, useEffect, useState } from "react";

export default function useLoading () {

    // const { loading, setLoading } = useContext(GlobalContext);
    const [loading, setLoading] = useState<boolean>(false);
    const handleVisibleLoading = (value:boolean) => {
        setLoading(value);
    }

    useEffect(()=>{

        console.log('-----loading-----');
        console.log(loading);
        console.log('----------');
        

    }, [loading])

    return{loading, handleVisibleLoading}
}