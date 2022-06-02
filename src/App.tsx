import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { useState } from "react";

Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionModalOpen, setNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setNewTransactionModalOpen(false);
  }
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h2>Cadastrar transação</h2>
      </Modal>
      <GlobalStyle />
    </>
  );
}
export default App;
