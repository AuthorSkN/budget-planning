import {TransactionRecord} from "./TransactionRecord";
import {transactions} from "../mocks";


export const TransactionList = () => {

    return (
        <ul>
            {transactions.map(({id, type, amount, account, date}) => {
                return <li key={id}><TransactionRecord type={type} amount={amount} account={account} date={date}/></li>
            })}
        </ul>
    )
}