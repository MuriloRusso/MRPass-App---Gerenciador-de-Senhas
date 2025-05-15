import Loading from "@/components/Loading";
import { GlobalContext } from "@/contexts/GlobalContext";
import { Register } from "@/types/register";
import { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import useFields from "./hooks/useFields";
import useGetList from "./hooks/useGetList";
import useModals from "./hooks/useModals";
import Header from "./templates/Header";
import List from "./templates/List";
import ModalConfirmDelete from "./templates/ModalConfirmDelete";
import ModalCreate from "./templates/ModalCreate";
import Search from "./templates/Search";

export default function Panel() {
  const [rows, setRows] = useState<Register[]>([]);
  const { registers, fetchData } = useGetList();
  const {
    modalCreateVisible,
    handleModalCreate,
    modalDeleteVisible,
    handleModalDelete,
  } = useModals();

  const {
    registerData,
    handleChangePlataformValue,
    handleChangePlataformError,
    handleChangeLinkValue,
    handleChangeLinkError,
    handleChangeUserValue,
    handleChangeUserError,
    handleChangePasswordValue,
    handleChangePasswordError,
    handleChangeDescriptionValue,
    handleChangeDescriptionError,
  } = useFields();

  const { loading } = useContext(GlobalContext);

  const [selectedItem, setSelectedItem] = useState<Register | null>(null);
  const handleSelectedItemChange = (item: Register | null) => {
    setSelectedItem(item);
  };

  useEffect(() => {
    if (selectedItem) {
      handleChangePlataformValue(selectedItem.plataforma);
      handleChangeLinkValue(selectedItem.link);
      handleChangeUserValue(selectedItem.usuario);
      handleChangePasswordValue(selectedItem.senha);
      handleChangeDescriptionValue(selectedItem?.descricao?.toString() ?? "");
    }
  }, [selectedItem]);

  useEffect(() => {
    const fetch = async () => {
      await fetchData();
    };
    fetch();
  }, []);

  useEffect(() => {
    setRows(registers);
  }, [registers]);

  return (
    <View>
      <View style={{ height: "100%" }}>
        <Header
          handleModalCreate={handleModalCreate}
          setSelectedItem={setSelectedItem}
          handleChangePlataformValue={handleChangePlataformValue}
          handleChangeLinkValue={handleChangeLinkValue}
          handleChangeUserValue={handleChangeUserValue}
          handleChangePasswordValue={handleChangePasswordValue}
          handleChangeDescriptionValue={handleChangeDescriptionValue}
        />

        <Search onSearch={(results) => setRows(results)} setRows={setRows} />

        <List
          modalConfirmDeleteFunction={handleModalDelete}
          modalCreateFunction={handleModalCreate}
          rows={rows}
          selectItemFunction={handleSelectedItemChange}
        />
      </View>

      <ModalConfirmDelete
        isVisible={modalDeleteVisible}
        handleFunction={handleModalDelete}
        selectedItem={selectedItem}
        fetchData={fetchData}
      />

      <ModalCreate
        data={registerData}
        handleChangePlataformValue={handleChangePlataformValue}
        handleChangePlataformError={handleChangePlataformError}
        handleChangeLinkValue={handleChangeLinkValue}
        handleChangeLinkError={handleChangeLinkError}
        handleChangeUserValue={handleChangeUserValue}
        handleChangeUserError={handleChangeUserError}
        handleChangePasswordValue={handleChangePasswordValue}
        handleChangePasswordError={handleChangePasswordError}
        handleChangeDescriptionValue={handleChangeDescriptionValue}
        handleChangeDescriptionError={handleChangeDescriptionError}
        isVisible={modalCreateVisible}
        handleFunction={handleModalCreate}
        handleModalCreate={handleModalCreate}
        selectedItem={selectedItem}
        fetchData={fetchData}
      />

      <Loading visible={loading} />
    </View>
  );
}
