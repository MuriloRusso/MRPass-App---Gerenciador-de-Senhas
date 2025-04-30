import ButtonSecondaryIcon from "../ButtonSecondaryIcon";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

function IconButtonEdit(){
    return <MaterialIcons name="edit" size={24} color="#FE715B" />
}

export default function ButtonEdit(){
    return <ButtonSecondaryIcon icon={IconButtonEdit} text="" />
}