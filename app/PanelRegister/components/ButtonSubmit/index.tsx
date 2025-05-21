import ButtonPrimary from "@/components/ButtonPrimary";
import { Register, RegisterDataProps } from "@/types/register";
import useCreate from "../../hooks/useCreate";
import useUpdate from "../../hooks/useUpdate";

type ButtonSubmitProps = {
    data: RegisterDataProps;
    handleModalCreate: () => void;
    selectedItem: Register | null;
    fetchData: () => void;
}

export default function ButtonSubmit({data,  handleModalCreate, selectedItem, fetchData}:ButtonSubmitProps){
    const {create} = useCreate(handleModalCreate, fetchData);
    const {update} = useUpdate(handleModalCreate, fetchData);

    const handleSubmit = () => {
        if (selectedItem === null) {

            console.log(data);
            

            create({
            plataform: data.plataform.value,
            descricao: data.description.value,
            link: data.link.value,
            user: data.user.value,
            password: data.password.value,
            });
        } else {
            update({
            id: Number(selectedItem.id),
            plataform: data.plataform.value, // aqui você pode querer mudar 'nome' para 'plataform' se desejar
            descricao: data.description.value,
            link: data.link.value,
            user: data.user.value,
            password: data.password.value,
            });
        }
    };


    return <ButtonPrimary text={selectedItem === null ? 'Criar Registro' : 'Atualizar Registro'} onClick={handleSubmit}/>
}