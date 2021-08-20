import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon, Input, Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { validaremail } from "../Utils/Utils";
import { isEmpty, size } from "lodash";
import * as firebase from "firebase";

export default function RegisterForm(props) {
  const { toastRef } = props;
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [repetirpassword, setrepetirpassword] = useState("");
  const navigation = useNavigation();

  function crearcuenta() {
    if (isEmpty(email) || isEmpty(password) || isEmpty(repetirpassword)) {
      toastRef.current.show("Todos los campos son obligatorios");
    } else if (!validaremail(email)) {
      toastRef.current.show("Correo no es válido");
    } else if (password !== repetirpassword) {
      toastRef.current.show("Las contraseñas tienen que ser Iguales");
    } else if (size(password) < 6) {
      toastRef.current.show(
        "Las contraseñas deben tener al menos 6 caracteres"
      );
    }
  }
  return (
    <View style={styles.container}>
      <View
        style={{
          borderBottomColor: "#25D366",
          borderBottomWidth: 2,
          width: 100,
        }}
      />
      <Input
        placeholder="Correo"
        containerStyle={styles.input}
        rightIcon={{
          type: "material-community",
          name: "at",
          color: "#128c7e",
        }}
        leftIcon={{
          type: "material-community",
          name: "account-circle-outline",
          color: "#128c7e",
        }}
        onChangeText={(text) => {
          setemail(text);
        }}
        value={email}
      />
      <Input
        placeholder="Contraseña"
        containerStyle={styles.input}
        leftIcon={{
          type: "material-community",
          name: "security",
          color: "#128c7e",
        }}
        rightIcon={{
          type: "material-community",
          name: "eye-outline",
          color: "#128C7E",
          onPress: () => alert("Hola"),
        }}
        onChangeText={(text) => {
          setpassword(text);
        }}
        secureTextEntry={true}
        value={password}
      />
      <Input
        placeholder="Repetir Contraseña"
        containerStyle={styles.input}
        leftIcon={{
          type: "material-community",
          name: "security",
          color: "#128c7e",
        }}
        rightIcon={{
          type: "material-community",
          name: "eye-outline",
          color: "#128C7E",
          onPress: () => alert("Hola"),
        }}
        onChangeText={(text) => {
          setrepetirpassword(text);
        }}
        secureTextEntry={true}
        value={repetirpassword}
      />
      <Button
        title="CREAR CUENTA"
        containerStyle={styles.btnentrar}
        buttonStyle={{ backgroundColor: "#25d366" }}
        onPress={() => crearcuenta()}
      />
      <Button
        title="INICIAR SESION"
        containerStyle={styles.btnentrar}
        buttonStyle={{ backgroundColor: "#128C7E" }}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F6F8",
    flex: 1,
    marginTop: 20,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    alignItems: "center",
    paddingTop: 20,
  },
  input: {
    width: "90%",
    marginTop: 20,
    height: 50,
  },
  btnentrar: {
    width: "90%",
    marginTop: 20,
  },
});
