import Input from "@/components/Input";
import { InputProps } from "@/types/input";

export default function InputUser({state, onChange}: {state:InputProps, onChange?: (value:string) => void;}) {
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