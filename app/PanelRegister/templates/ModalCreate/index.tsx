import ButtonSecondary from '@/components/ButtonSecondary';
import { Register, RegisterDataProps } from '@/types/register';
import { Modal, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import FolderIcon from '../../../../components/FolderIcon';
import ButtonSubmit from '../../components/ButtonSubmit';
import useFields from '../../hooks/useFields';
import Form from '../Form';

type ModalProps = {
  isVisible: boolean;
  handleFunction: () => void;
  data: RegisterDataProps;
  handleChangePlataformValue: (value: string) => void;
  handleChangeLinkValue: (value: string) => void;
  handleChangeUserValue: (value: string) => void;
  handleChangePasswordValue: (value: string) => void;
  handleChangeDescriptionValue: (value: string) => void;
  handleChangePlataformError: (error: boolean) => void;
  handleChangeLinkError: (error: boolean) => void;
  handleChangeUserError: (error: boolean) => void;
  handleChangePasswordError: (error: boolean) => void;
  handleChangeDescriptionError: (error: boolean) => void;
  handleModalCreate: () => void;
  selectedItem: Register | null;
  fetchData: () => void;
};

const ModalCreate = ({
  isVisible,
  handleFunction,
  data,
  handleChangePlataformValue,
  handleChangeLinkValue,
  handleChangeUserValue,
  handleChangePasswordValue,
  handleChangeDescriptionValue,
  handleChangePlataformError,
  handleChangeLinkError,
  handleChangeUserError,
  handleChangePasswordError,
  handleChangeDescriptionError,
  handleModalCreate,
  selectedItem,
  fetchData,
}: ModalProps) => {

  const { registerData } = useFields();
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
                handleChangePlataformValue={handleChangePlataformValue}
                handleChangeLinkValue={handleChangeLinkValue}
                handleChangeUserValue={handleChangeUserValue}
                handleChangePasswordValue={handleChangePasswordValue}
                handleChangeDescriptionValue={handleChangeDescriptionValue}
                handleChangePlataformError={handleChangePlataformError}
                handleChangeLinkError={handleChangeLinkError}
                handleChangeUserError={handleChangeUserError}
                handleChangePasswordError={handleChangePasswordError}
                handleChangeDescriptionError={handleChangeDescriptionError}
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