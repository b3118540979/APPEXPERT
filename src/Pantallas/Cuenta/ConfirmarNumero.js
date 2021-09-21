import React, { useState, useRef } from "react";
import { StyleSheet, View, Text, Image, Alert } from "react-native";
import CodeInput from "react-native-code-input";
import { useNavigation } from "@react-navigation/native";
import Loading from "../../Componentes/Loading";
import {
  confirmarCodigo,
  obtenerToken,
  ObtenerUsuario,
  addRegistroEspecifico,
} from "../../Utils/Acciones";

export default function ConfirmarNumero(props) {
  const { route } = props;
  const { verificationid } = route.params;
  //console.log(verificationid);
  const [loading, setloading] = useState(false);

  const confirmarCodigoSMS = async (code) => {
    setloading(true);
    const resultado = await confirmarCodigo(verificationid, code);
    console.log(resultado);
    if (resultado) {
      const token = await obtenerToken();
      const { uid, displayName, photoURL, email, phoneNumber } =
        ObtenerUsuario();

      const registro = await addRegistroEspecifico("Usuarios", uid, {
        token,
        displayName,
        photoURL,
        email,
        phoneNumber,
        fechacreacion: new Date(),
      });
      setloading(false);
    } else {
      Alert.alert("Error", "Favor válidar el código introducido", [
        {
          style: "default",
          text: "Entendido",
        },
      ]);
      setloading(false);
    }
    //1. Obtener token móvil para push notification
  };
  //Va a extraer la informacion del Usuario
  //Va a obtener el token del telefono - pushnotification
  //Va a hacer las validaciones y confirmar la autenticacion

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/logo.png")}
        style={styles.imglogo}
      />
      <Text style={styles.titulo}>
        Favor revisa tus SMS e introduzca el codigo de información
      </Text>
      <CodeInput
        activeColor="#fff"
        inactiveColor="#fff"
        autoFocus={true}
        inputPosition="center"
        size={50}
        codeLength={6}
        containerStyle={{ marginTop: 30 }}
        codeInputStyle={{ borderWidth: 0.5 }}
        onFulfill={(code) => confirmarCodigoSMS(code)}
        secureTextEntry
      />
      <Loading isVisible={loading} text="Favor espere" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#128C7E",
    paddingHorizontal: 20,
  },
  imglogo: {
    width: 106,
    height: 106,
    alignSelf: "center",
    marginTop: 20,
  },
  titulo: {
    fontSize: 20,
    textAlign: "center",
    color: "#fff",
    marginVertical: 20,
  },
});
