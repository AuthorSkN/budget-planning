import {Id} from "./common";

export interface Category {
    id: Id
    name: string
}

export interface IncomeCategory extends Category {
}

export interface ExpenseCategory extends Category {
}