import ButtonSecondary from '@/components/ButtonSecondary';
import { Folder, FolderDataProps } from '@/types/folder';
import { Modal, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ButtonSubmit from '../../components/ButtonSubmit';
import FolderIcon from '../../components/FolderIcon';
import useFields from '../../hooks/useFields';
import Form from '../Form';

type ModalProps = {
  isVisible: boolean;
  handleFunction: () => void;
  data: FolderDataProps;
  handleChangeNameValue: (value:string) => void;
  handleChangeDescriptionValue: (value:string) => void;
  handleModalCreate: () => void;
  selectedItem: Folder | null;
  fetchData: () => void;
}
const ModalCreate = ({
  isVisible,
  handleFunction,
  data,
  handleChangeNameValue,
  handleChangeDescriptionValue,
  handleModalCreate,
  selectedItem,
  fetchData
}:ModalProps) => {
  const { folderData } = useFields();
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={isVisible}
          onRequestClose={() => {
            handleFunction();
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.modalHeader}>
                  <FolderIcon size={40}/>
                  <Text style={{fontSize: 20}}>Criar Pasta</Text>
              </View>
              <Form
                data={data}
                handleChangeNameValue={handleChangeNameValue}
                handleChangeDescriptionValue={handleChangeDescriptionValue}
              />
              <View style={styles.containerBtns}>
                <ButtonSecondary text='Cancelar' onClick={handleFunction}/>
                <ButtonSubmit data={data} handleModalCreate={handleModalCreate} selectedItem={selectedItem} fetchData={fetchData}/>
              </View>
            </View>
          </View>
        </Modal>
      </SafeAreaView> 
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "rgba(0,0,0,0.6)"
  },
  modalView: {
    width: "80%",
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 4,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalHeader:{
    marginBottom: 20, 
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    justifyContent: "flex-start",
    width: "100%",
    borderColor: "#ccc",
    borderBottomWidth: 1,
    paddingBottom: 10
  },
  containerBtns: {
    borderColor: "#ccc",
    borderTopWidth: 1,
    paddingTop: 20,
    marginTop: 20,
    display: 'flex',
    flexDirection: "row",
    // gap: 10,
    justifyContent: "space-around",
    width: "100%"
  }
});

export default ModalCreate;