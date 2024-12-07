import {Account} from "./types/accounts";
import {ExpenseCategory, IncomeCategory} from "./types/catgories";
import {Transaction, TRANSACTION_TYPE_EXPENSES, TRANSACTION_TYPE_INCOME} from "./types/transactions";

export const accounts: Record<string, Account> = {
    't-bank': {
        id: '0',
        name: 't-bank'
    },
    'ozon-bank': {
        id: '1',
        name: 'ozon-bank'
    },
    'sberbank': {
        id: '1',
        name: 'sberbank'
    },
}

export const salary: IncomeCategory = {
    id: 'salary',
    name: 'Salary',
}

export const expenses: Record<string, ExpenseCategory> = {
    'mandatory': {
        id: 'mandatory',
        name: 'Mandatory',
    },
    'groceries': {
        id: 'groceries',
        name: 'Groceries',
    },
    'car': {
        id: 'car',
        name: 'Car',
    },
    'restaurants': {
        id: 'restaurants',
        name: 'Restaurants',
    },
    'common': {
        id: 'common',
        name: 'Common',
    }
}


export const transactions: Transaction[] = [
    {
        id: '0',
        type: TRANSACTION_TYPE_INCOME,
        amount: 100,
        account: accounts['t-bank'],
        income: salary,
        date: new Date('2024-02-24')
    },
    {
        id: '1',
        type: TRANSACTION_TYPE_EXPENSES,
        amount: 10,
        account: accounts['t-bank'],
        expense: expenses['common'],
        date: new Date('2024-02-26')
    },
    {
        id: '2',
        type: TRANSACTION_TYPE_EXPENSES,
        amount: 100,
        account: accounts['t-bank'],
        expense: expenses['restaurants'],
        date: new Date('2024-02-26')
    },
    {
        id: '3',
        type: TRANSACTION_TYPE_INCOME,
        amount: 200,
        account: accounts['t-bank'],
        income: salary,
        date: new Date('2024-02-27')
    }
]