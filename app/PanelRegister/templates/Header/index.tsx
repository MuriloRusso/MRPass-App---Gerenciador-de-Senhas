import FolderIcon from '@/components/FolderIcon';
import { Register } from '@/types/register';
import { StyleSheet, Text, View } from 'react-native';
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

  return (
    <View style={styles.header}>
      <View style={{ display: 'flex', flexDirection: 'row', gap: 5, alignItems: 'center' }}>
        <FolderIcon size={40} />
        <Text style={{ fontSize: 30 }}>Nome da Pasta</Text>
      </View>
      <ButtonNew onClick={handleModal} />
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
  },
});
