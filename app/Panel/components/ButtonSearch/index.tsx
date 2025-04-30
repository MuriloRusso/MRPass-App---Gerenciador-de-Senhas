import ButtonPrimaryIcon from "@/components/ButtonPrimaryIcon";
import AntDesign from '@expo/vector-icons/AntDesign';

function ButtonIcon (){
    return <AntDesign name="search1" size={24} color="white" />
} 

export default function ButtonSearch(){
    return <ButtonPrimaryIcon text="" icon={ButtonIcon}/>
}