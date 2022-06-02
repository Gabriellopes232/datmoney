import { Dashboard } from "./components/Dashboard";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";

export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </>
  );
}
export default App;
