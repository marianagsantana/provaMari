import React from "react";
import { Button, TextInput, View, StyleSheet } from "react-native";

export default function CadastroEmpresa({
  nomeEmpresa,
  setNomeEmpresa,
  cepEmpresa,
  setCepEmpresa,
  cidadeEmpresa,
  setCidadeEmpresa,
  estadoEmpresa,
  setEstadoEmpresa,
  bairroEmpresa,
  setBairroEmpresa,
  enderecoEmpresa,
  setEnderecoEmpresa,
  handleCadastro,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={nomeEmpresa}
          onChangeText={setNomeEmpresa}
          placeholder="Nome da Empresa"
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.input}
          value={cepEmpresa}
          onChangeText={setCepEmpresa}
          placeholder="CEP"
          placeholderTextColor="#888"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          value={cidadeEmpresa}
          onChangeText={setCidadeEmpresa}
          placeholder="Cidade Empresa"
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.input}
          value={estadoEmpresa}
          onChangeText={setEstadoEmpresa}
          placeholder="Estado Empresa"
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.input}
          value={bairroEmpresa}
          onChangeText={setBairroEmpresa}
          placeholder="Bairro"
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.input}
          value={enderecoEmpresa}
          onChangeText={setEnderecoEmpresa}
          placeholder="Logradouro"
          placeholderTextColor="#888"
        />
      </View>
      <Button title="Cadastrar Empresa" onPress={handleCadastro} style={styles.button} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20,
  },
  input: {
    marginBottom: 10,
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 8,
  },
});
