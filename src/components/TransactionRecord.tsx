import {TRANSACTION_TYPE_INCOME, TransactionType} from "../types/transactions";
import {Account} from "../types/accounts";

export interface TransactionRecord {
    type: TransactionType;
    amount: number
    date: Date,
    account: Account,
}

export const TransactionRecord = ({type, amount, date, account}: TransactionRecord) => {
    return (
        <div>
            {account.name}
            <div><span>{type === TRANSACTION_TYPE_INCOME ? '+' : '-'}</span><span>{amount}</span></div>
            <div>{date.toLocaleDateString()}</div>
        </div>
    )
}