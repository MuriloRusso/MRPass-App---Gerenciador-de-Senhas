import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import ButtonSecondaryIcon from "../ButtonSecondaryIcon";

function ButtonLogoutIcon(){
    return <MaterialIcons name="logout" size={24} color="#FE715B" />
}

export default function ButtonLogout() {
    const { isAuthenticated } = useContext(AuthContext);
    return isAuthenticated && <ButtonSecondaryIcon text="Sair" icon={ButtonLogoutIcon} />
}