import { Folder } from "@/types/folder";
import { useEffect, useState } from "react";

export default function useFields(){
    
    const [rows, setRows] = useState<Folder[]>([]);
    useEffect(() => {
        console.log('rows');
        console.log(rows);        
    }, [rows]);    
    
    return {rows, setRows}
}