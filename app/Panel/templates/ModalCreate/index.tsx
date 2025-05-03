import ButtonPrimary from '@/components/ButtonPrimary';
import ButtonSecondary from '@/components/ButtonSecondary';
import { Modal, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import FolderIcon from '../../components/FolderIcon';
import Form from '../Form';

type ModalProps = {
  isVisible: boolean;
  handleFunction: () => void;
}
const ModalCreate = ({isVisible, handleFunction}:ModalProps) => {
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
                  <Text>Criar Pasta</Text>
              </View>
              <Form/>
              <View style={styles.containerBtns}>
                <ButtonSecondary text='Cancelar' onClick={handleFunction} />
                <ButtonPrimary text='Confirmar' />
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
    marginBottom: 10, 
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    justifyContent: "flex-start",
    width: "100%",
    borderColor: "#aaa",
    borderBottomWidth: 1
  },
  containerBtns: {
    display: 'flex',
    flexDirection: "row",
    // gap: 10,
    justifyContent: "space-around",
    width: "100%"
  }
});

export default ModalCreate;