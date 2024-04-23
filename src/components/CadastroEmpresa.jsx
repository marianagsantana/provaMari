import React from "react";
import { Button, TextInput, View } from "react-native";

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
    <View>
      <TextInput
        value={nomeEmpresa}
        onChangeText={setNomeEmpresa}
        placeholder="Nome da Empresa"
      />
      <TextInput
        value={cepEmpresa}
        onChangeText={setCepEmpresa}
        placeholder="CEP"
      />
      <TextInput
        value={cidadeEmpresa}
        onChangeText={setCidadeEmpresa}
        placeholder="Cidade Empresa"
      />
      <TextInput
        value={estadoEmpresa}
        onChangeText={setEstadoEmpresa}
        placeholder="Estado Empresa"
      />
      <TextInput
        value={bairroEmpresa}
        onChangeText={setBairroEmpresa}
        placeholder="Bairro"
      />
      <TextInput
        value={enderecoEmpresa}
        onChangeText={setEnderecoEmpresa}
        placeholder="Logradouro"
      />
      <Button title="Cadastrar Empresa" onPress={handleCadastro} />
    </View>
  );
}
