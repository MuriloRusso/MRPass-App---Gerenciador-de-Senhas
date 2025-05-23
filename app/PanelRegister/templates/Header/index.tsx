import FolderIcon from '@/components/FolderIcon';
import { GlobalContext } from '@/contexts/GlobalContext';
import { Register } from '@/types/register';
import { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ButtonBack from '../../components/ButtonBack';
import ButtonNew from '../../components/ButtonNew';

type HeaderProps = {
  handleModalCreate: () => void;
  setSelectedItem: (value: Register | null) => void;
  handleChangePlataformValue: (value: string) => void;
  handleChangeLinkValue: (value: string) => void;
  handleChangeUserValue: (value: string) => void;
  handleChangePasswordValue: (value: string) => void;
  handleChangeDescriptionValue: (value: string) => void;
};

export default function Header({
  handleModalCreate,
  setSelectedItem,
  handleChangePlataformValue,
  handleChangeLinkValue,
  handleChangeUserValue,
  handleChangePasswordValue,
  handleChangeDescriptionValue,
}: HeaderProps) {
  const handleModal = () => {
    setSelectedItem(null);
    handleChangePlataformValue('');
    handleChangeLinkValue('');
    handleChangeUserValue('');
    handleChangePasswordValue('');
    handleChangeDescriptionValue('');
    handleModalCreate();
  };

  const { selectFolder } = useContext(GlobalContext);

  return (
    <View>
      <ButtonBack/>
      <View style={styles.header}>
        <View style={{ display: 'flex', flexDirection: 'row', gap: 5, alignItems: 'center' }}>
          <FolderIcon size={40} />
          <Text style={{ fontSize: 30 }}>{selectFolder?.nome}</Text>
        </View>
        <ButtonNew onClick={handleModal} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    padding: 10,
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
});
