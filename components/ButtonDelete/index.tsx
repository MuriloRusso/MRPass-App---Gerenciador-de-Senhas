import ButtonGrayIcon from "../ButtonGrayIcon";
import ButtonSecondaryIcon from "../ButtonSecondaryIcon";
import FontAwesome from '@expo/vector-icons/FontAwesome';

function IconButtonDelete(){
    // return <FontAwesome name="trash" size={24} color="#FE715B" />
    return <FontAwesome name="trash" size={24} color="#777" />

}

export default function ButtonDelete(){
    // return <ButtonSecondaryIcon icon={IconButtonDelete} text="" />
    return <ButtonGrayIcon icon={IconButtonDelete} text="" />

}