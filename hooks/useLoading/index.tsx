import { useState } from "react";

export default function useLoading () {

    const [loading, setLoading] = useState<boolean>(false);
    const handleVisibleLoading = (value:boolean) => {
        setLoading(value);
    }

    return{loading, handleVisibleLoading}
}