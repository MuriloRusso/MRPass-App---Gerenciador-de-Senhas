import { Folder } from '@/types/folder';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { StyleSheet, Text, View } from 'react-native';
import ButtonNew from '../../components/ButtonNew';


type HeaderProps = {
    handleModalCreate: () => void;
    setSelectedItem: (value:Folder | null) => void;
    handleChangeNameValue: (value:string) => void;
    handleChangeDescriptionValue: (value:string) => void;
}

export default function Header({handleModalCreate, setSelectedItem, handleChangeNameValue, handleChangeDescriptionValue}:HeaderProps){

    const handleModal = () => {
        setSelectedItem(null);
        handleChangeNameValue('');
        handleChangeDescriptionValue('');
        handleModalCreate();
    }

    return (
        <View style={styles.header}>
            <View style={{display: 'flex', flexDirection: 'row', gap: 5, alignItems: 'center'}}>
                <FontAwesome name="dashboard" size={40} color="#777" />
                <Text style={{fontSize: 30}}>Painel</Text>
            </View>
            <ButtonNew onClick={handleModal}/>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        marginTop: 20,
        display: 'flex',
        flexDirection: "row",
        gap: 5,
        padding: 10,
        justifyContent: "space-between"
    },
})