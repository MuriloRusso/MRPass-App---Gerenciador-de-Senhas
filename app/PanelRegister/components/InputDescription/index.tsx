import Textarea from "@/components/Textarea";
import { InputProps } from "@/types/input";

export default function InputDescription({state, onChange}: {state:InputProps, onChange?: (value:string) => void;}) {
    return (
        <Textarea 
            error={state.error}
            errorText={state.errorText}
            value={state.value}
            placeholder={state.placeholder}
            onChange={onChange}
        />
    )
}