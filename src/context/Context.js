import React, { useReducer, createContext } from 'react';
import contextReducer from './contextReducer'; // Assuming reducer is in a separate file

const initialState = [];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialState);

    // Action Creators
    const deleteTransaction = (id) => { 
        dispatch({ type: 'DELETE_TRANSACTION', payload: id }); 
    }

    const addTransaction = (transaction) => { 
        dispatch({ type: 'ADD_TRANSACTION', payload: transaction }); 
    }

    return (
        <ExpenseTrackerContext.Provider value={{
            transactions,
            deleteTransaction,
            addTransaction,
        }}>
            {children}
        </ExpenseTrackerContext.Provider>
    );
};
