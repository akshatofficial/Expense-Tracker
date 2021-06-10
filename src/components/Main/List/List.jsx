import React, {useContext} from 'react';

import {MoneyOff, Delete} from '@material-ui/icons';
import {
    List as MUIList,
    ListItem,
    ListItemSecondaryAction,
    IconButton,
    ListItemAvatar,
    Avatar,
    Slide, ListItemText, Typography, Grid, Paper, Button
} from '@material-ui/core';

import useStyle from './style';
import {ExpenseTrackerContext} from "../../../Context/Context";

const List = () => {

    const {deleteTransaction, transactions} = useContext(ExpenseTrackerContext);

    const removeTransaction = (id) => {
        deleteTransaction(id);
    }

    const classes = useStyle();

    return (
        transactions.length === 0 ?
            <div style={{
                textAlign: "center",
                padding: "8px"
            }}>
                <Typography variant={"h5"}>No Transaction Found</Typography>
            </div>
            :
            <div style={{
                textAlign: "center",
                padding: "8px"
            }}>
                <Typography variant={"h5"}>Transactions&#128220;&#128204;</Typography>
                <MUIList dense={false} className={classes.list}>
                    {transactions.map((transaction) => (
                        <Slide direction={"down"} in mountOnEnter unmountOnExit key={transaction.id}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar
                                        className={transaction.type === "Income" ? classes.avatarIncome : classes.avatarExpense}>
                                        <MoneyOff/>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={transaction.category}
                                    secondary={`₹${transaction.amount} - ${transaction.date}`}
                                />
                                <ListItemSecondaryAction>
                                    <IconButton edge={"end"} aria-label={"delete"}
                                                onClick={() => removeTransaction(transaction.id)}>
                                        <Delete/>
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        </Slide>
                    ))}
                </MUIList>
            </div>
    );
};

export default List;