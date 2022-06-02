import { TrasactionsTable } from "../TransactionsTable";

import { Summary } from "../Summary";

import { Container } from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <TrasactionsTable></TrasactionsTable>
    </Container>
  );
}
