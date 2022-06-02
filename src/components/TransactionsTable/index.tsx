import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TrasactionsTable() {
  useEffect(() => {
    api.get("transactions").then((response) => console.log(response.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="deposit">Desenvolvimento de website</td>
            <td>R$12.000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2022</td>
          </tr>
          <tr>
            <td className="withdraw">Aluguel</td>
            <td>-R$1.000</td>
            <td>Casa</td>
            <td>24/01/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
