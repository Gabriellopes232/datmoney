import { useContext } from 'react';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg'
import { TransactionsContext } from '../../TransactionsContext';

import { Container } from "./styles";

export function Summary() {
    const transactions = useContext(TransactionsContext)
    console.log(transactions)
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                    <strong>R$1000,00</strong>
                </header>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Entradas" />
                    <strong>-R$500,00</strong>
                </header>
            </div>
            <div className='high'>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                    <strong>R$500,00</strong>
                </header>
            </div>
        </Container>
    )
}