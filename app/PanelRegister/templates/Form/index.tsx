import { RegisterDataProps } from "@/types/register";
import { StyleSheet, View } from "react-native";
import InputDescription from "../../components/InputDescription";
import InputLink from "../../components/InputLink";
import InputPassword from "../../components/InputPassword";
import InputPlataform from "../../components/InputPlataform";
import InputUser from "../../components/InputUser";

type FormProps = {
  data: RegisterDataProps;
  handleChangePlataformValue: (value: string) => void;
  handleChangeLinkValue: (value: string) => void;
  handleChangeUserValue: (value: string) => void;
  handleChangePasswordValue: (value: string) => void;
  handleChangeDescriptionValue: (value: string) => void;
};

export default function Form({
  data,
  handleChangePlataformValue,
  handleChangeLinkValue,
  handleChangeUserValue,
  handleChangePasswordValue,
  handleChangeDescriptionValue,
}: FormProps) {
  return (
    <View style={styles.form}>
      <InputPlataform
        state={data.plataform}
        onChange={handleChangePlataformValue}
        // onError={handleChangePlataformError}
      />
      <InputLink
        state={data.link}
        onChange={handleChangeLinkValue}
        // onError={handleChangeLinkError}
      />
      <InputUser
        state={data.user}
        onChange={handleChangeUserValue}
        // onError={handleChangeUserError}
      />
      <InputPassword
        state={data.password}
        onChange={handleChangePasswordValue}
      />
      <InputDescription
        state={data.description}
        onChange={handleChangeDescriptionValue}
        // onError={handleChangeDescriptionError}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    flexDirection: "column",
    gap: 20,
    width: "100%",
  },
});
