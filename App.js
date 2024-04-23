import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { Button, TextInput, View, Modal } from "react-native";
import { db } from "./src/config/firebase";
import CadastroEmpresa from "./src/components/CadastroEmpresa";


export default function App() {
  const [nomeEmpresa, setNomeEmpresa] = useState("");
  const [cidadeEmpresa, setCidadeEmpresa] = useState("");
  const [enderecoEmpresa, setEnderecoEmpresa] = useState("");
  const [cepEmpresa, setCepEmpresa] = useState("");
  const [estadoEmpresa, setEstadoEmpresa] = useState("");
  const [bairroEmpresa, setBairroEmpresa] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  async function handleCadastro() {
    try {
      const docRef = await addDoc(collection(db, "empresas"), {
        nomeEmpresa: nomeEmpresa,
        cidadeEmpresa: cidadeEmpresa,
        enderecoEmpresa: enderecoEmpresa,
        cepEmpresa: cepEmpresa,
        estadoEmpresa: estadoEmpresa,
        bairroEmpresa: bairroEmpresa,
      });

      console.log("O documento foi criado com a ID:", docRef.id);
      setModalVisible(false); // Fecha o modal após o cadastro
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View>
      <Button title="Cadastrar Empresa" onPress={() => setModalVisible(true)} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View>
          <CadastroEmpresa
            nomeEmpresa={nomeEmpresa}
            setNomeEmpresa={setNomeEmpresa}
            cepEmpresa={cepEmpresa}
            setCepEmpresa={setCepEmpresa}
            cidadeEmpresa={cidadeEmpresa}
            setCidadeEmpresa={setCidadeEmpresa}
            estadoEmpresa={estadoEmpresa}
            setEstadoEmpresa={setEstadoEmpresa}
            bairroEmpresa={bairroEmpresa}
            setBairroEmpresa={setBairroEmpresa}
            enderecoEmpresa={enderecoEmpresa}
            setEnderecoEmpresa={setEnderecoEmpresa}
            handleCadastro={handleCadastro}
          />
        </View>
      </Modal>
    </View>
  );
}
