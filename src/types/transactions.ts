import {Id} from "./common";
import {Account} from "./accounts";
import {ExpenseCategory, IncomeCategory} from "./catgories";

interface CommonTransaction {
    id: Id
    amount: number
    account: Account
    type: TransactionType
    date: Date
}

export interface IncomeTransaction extends CommonTransaction {
    type: typeof TRANSACTION_TYPE_INCOME
    income: IncomeCategory
}

export interface ExpenseTransaction extends CommonTransaction {
    type: typeof TRANSACTION_TYPE_EXPENSES
    expense: ExpenseCategory
}

export interface TransferTransaction extends CommonTransaction {
    type: typeof TRANSACTION_TYPE_EXPENSES
    sourceAccount: Account
}

export type Transaction = IncomeTransaction | ExpenseTransaction | TransferTransaction

export const TRANSACTION_TYPE_INCOME = 'income-type'
export const TRANSACTION_TYPE_EXPENSES = 'expenses-type'
export const TRANSACTION_TYPE_TRANSFER = 'transfer-type'
export type TransactionType =
    | typeof TRANSACTION_TYPE_INCOME
    | typeof TRANSACTION_TYPE_EXPENSES
    | typeof TRANSACTION_TYPE_TRANSFER