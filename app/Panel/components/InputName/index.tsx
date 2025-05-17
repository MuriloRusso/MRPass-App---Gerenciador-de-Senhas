import Input from "@/components/Input";
import { InputProps } from "@/types/input";
import { useEffect } from "react";

export default function InputName({state, onChange}: {state:InputProps, onChange?: (value:string) => void;}) {
    useEffect(()=>{
        console.log('state.error');
        console.log(state.error);
    }, [state.error])
    useEffect(()=>{
        console.log('state.value');
        console.log(state.value);
    }, [state.value])
    return (
        <Input 
            error={state.error}
            errorText={state.errorText}
            value={state.value}
            placeholder={state.placeholder}
            onChange={onChange}
        />
    )
}