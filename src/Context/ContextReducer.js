import {CREATE_TRANSACTION, DELETE_TRANSACTION} from "./types";

let transactions;

const contextReducer = (state, action) => {
    switch (action.type) {
        case DELETE_TRANSACTION:
            transactions = state.filter((t) => t.id !== action.payload)
            return transactions;
        case CREATE_TRANSACTION:
            transactions = [action.payload, ...state];
            return transactions;
        default:
            return state;
    }
}

export default contextReducer;