import ButtonPrimaryIcon from "@/components/ButtonPrimaryIcon";
import Ionicons from '@expo/vector-icons/Ionicons';

function Icon(){
    return <Ionicons name="add-circle-outline" size={24} color="white" /> 
}

export default function ButtonNew({onClick}:{onClick: () => void;}){
    return <ButtonPrimaryIcon text="Novo Registro" icon={Icon} onClick={onClick}/>
}