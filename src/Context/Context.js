import React, {useReducer, createContext} from "react";
import contextReducer from "./ContextReducer";
import {CREATE_TRANSACTION, DELETE_TRANSACTION} from "./types";

const initialState = [];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({children}) => {

    const [transactions, dispatch] = useReducer(contextReducer, initialState);

    const deleteTransaction = (id) => {
        dispatch({type: DELETE_TRANSACTION, payload: id});
    }

    const createTransaction = (transaction) => {
        dispatch({type: CREATE_TRANSACTION, payload: transaction});
    }

    //console.log(transactions);

    return (
        <ExpenseTrackerContext.Provider value={{
            deleteTransaction,
            createTransaction,
            transactions
        }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}