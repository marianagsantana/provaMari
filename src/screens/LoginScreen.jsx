import React, { useState } from "react";
import { View, Button, TextInput, Modal } from "react-native";
import { Text } from "react-native-paper";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  async function handleLogin() {
    setLoading(true);
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      setLoading(false);
      if (user) setModalVisible(false); // Fecha o modal após o login
      console.log(user);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <View>
      <Button title="Login" onPress={() => setModalVisible(true)} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View>
          <View>
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
            />
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="Senha"
              secureTextEntry
            />
            <Button title="Entrar" onPress={handleLogin} />
          </View>
        </View>
      </Modal>
    </View>
  );
}
