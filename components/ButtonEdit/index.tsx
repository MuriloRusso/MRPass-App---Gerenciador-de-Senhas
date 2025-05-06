import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import ButtonSecondaryIcon from "../ButtonSecondaryIcon";

function IconButtonEdit(){
    return <MaterialIcons name="edit" size={24} color="#FE715B" />
}

export default function ButtonEdit({onClick}: {onClick: () => void;}){
    return <ButtonSecondaryIcon icon={IconButtonEdit} text="" onClick={onClick} />
}