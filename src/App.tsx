import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./TransactionsContext";

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
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
export default App;
