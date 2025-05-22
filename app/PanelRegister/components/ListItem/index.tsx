import ButtonDelete from "@/components/ButtonDelete";
import ButtonEdit from "@/components/ButtonEdit";
import useToast from "@/hooks/useToast";
import { Register } from "@/types/register";
import Feather from '@expo/vector-icons/Feather';
import * as Clipboard from 'expo-clipboard';
import { Linking, StyleSheet, Text, View } from "react-native";
import RegisterIcon from "../RegisterIcon";


type ListItemProps = {
  register: Register;
  modalConfirmDeleteFunction: () => void;
  modalCreateFunction: () => void;
  selectItemFunction: (value:Register | null) => void
}

export default function ListItem({register, modalConfirmDeleteFunction, modalCreateFunction, selectItemFunction}:ListItemProps){
    const handleDelete = () => {      
      selectItemFunction({id: register.id, plataforma: register.plataforma, descricao: register.descricao, link: register.link, usuario: register.usuario, senha: register.senha});
      modalConfirmDeleteFunction();
    }

    const handleUpdate = () => {      
      selectItemFunction({id: register.id, plataforma: register.plataforma, descricao: register.descricao, link: register.link, usuario: register.usuario, senha: register.senha});
      modalCreateFunction();
    }
    
    const handleLink = (link: string) => {
      Linking.openURL(link);
    }

    const { handleAddToast } = useToast();
    
    const copyClipboard = async (txt:string) => {
      await Clipboard.setStringAsync(txt);
        handleAddToast({
        message: "Texto copiado para a área de transferência.",
        type: 'info',        
      });
    };

    return (
        <View style={styles.item}>
            <View>
                <View style={{display: 'flex', gap: 10}}>
                    <View>
                      <View style={{display: "flex", flexDirection: "row", gap: 10}}>
                        <RegisterIcon size={35}/>
                        <Text style={styles.title}>{register.plataforma}</Text>
                      </View>
                      <Text>{register.descricao}</Text>

                      <View style={styles.itemRegister}>
                        <Text style={styles.itemRegisterText}>Usuário:</Text>
                        <View style={styles.itemContainer}>
                          <Text style={styles.itemRegisterText}>{register.usuario}</Text>
                          <Feather name="copy" size={30} color="black" onPress={() => copyClipboard(register.usuario)} />
                        </View>
                      </View>

                      <View style={styles.itemRegister}>
                        <Text style={styles.itemRegisterText}>Senha:</Text>
                        <View style={styles.itemContainer}>
                          <Text style={styles.itemRegisterText}>{register.senha}</Text>
                          <Feather name="copy" size={30} color="black" onPress={() => copyClipboard(register.senha)} />
                        </View>
                      </View>

                      <View style={styles.itemRegister}>
                        <Text style={styles.itemRegisterText}>Link:</Text>
                        <View style={styles.itemContainer}>
                          <Text 
                            style={{...styles.itemRegisterText, ...styles.itemRegisterLink}}
                            onPress={() => handleLink(register.link)}>
                              {register.link}
                          </Text>
                          <Feather name="copy" size={30} color="black" onPress={() => copyClipboard(register.link)} />
                        </View>
                      </View>

                    </View>
                </View>
                <View style={styles.containerAcoes}>
                    <ButtonEdit onClick={handleUpdate} />
                    <ButtonDelete onClick={handleDelete}/>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    // marginHorizontal: 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: "#ccc",
    alignItems: 'center'
  },
  title: {
    fontSize: 25,
  },
  description: {
    fontSize: 16,
    maxWidth: '80%'
  },
  containerAcoes: {
    display: "flex",
    flexDirection: "row",
    // padding: 5,
    marginVertical: 15,
    gap: 15
  },
  itemRegister: {
    marginVertical: 20,
  },
  itemRegisterText: {
    fontSize: 20
  },
  itemRegisterLink: {
    color: "#0000ff",
    textDecorationLine: "underline"
  },
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
    flexWrap: "wrap"
  }
});
