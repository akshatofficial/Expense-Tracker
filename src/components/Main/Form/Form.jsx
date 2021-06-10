import React, {useContext, useEffect, useState} from 'react';

import {TextField, Button, Typography, Select, MenuItem, FormControl, InputLabel, Grid} from '@material-ui/core';
import useStyle from './style';

import {ExpenseTrackerContext} from "../../../Context/Context";
import {incomeCategories, expenseCategories} from '../../../Constants/Categories';

import {v4 as uuidV4} from 'uuid';

import makeToast from "../../Toast";
import {ERROR, SUCCESS} from "../../../Context/types";

import {useSpeechContext} from '@speechly/react-client';

const initialFormData = {
    amount: "",
    type: "Income",
    category: "",
    date: new Date().toISOString().slice(0, 10)
}

const Form = () => {

    const {segment} = useSpeechContext();

    const {createTransaction} = useContext(ExpenseTrackerContext);

    const [formData, setFormData] = useState(initialFormData);

    const classes = useStyle();

    const selectedCategories = (formData.type === "Income") ? incomeCategories : expenseCategories;

    const addTransaction = () => {
        if (formData.amount === "") {
            makeToast(ERROR, "Please enter an amount.");
        } else if (formData.category === "") {
            makeToast(ERROR, "Please choose a category.");
        } else {
            const transaction = {...formData, amount: Number(formData.amount), id: uuidV4()}
            createTransaction(transaction);
            setFormData(initialFormData);
            makeToast(SUCCESS, "Transaction created successfully.");
        }
    }

    useEffect(() => {
        if (segment) {
            if (segment.intent.intent === "add_expense") {
                setFormData({...formData, type: "Expense"});
            } else if (segment.intent.intent === "add_income") {
                setFormData({...formData, type: "Income"});
            } else if (segment.isFinal && segment.intent.intent === "create_transaction") {
                return addTransaction();
            } else if (segment.isFinal && segment.intent.intent === "cancel_transaction") {
                setFormData(initialFormData);
            }

            segment.entities.forEach((e) => {
                switch (e.type) {
                    case 'amount':
                        setFormData({...formData, amount: e.value});
                        break;
                    case 'category':
                        const modifiedCategory = `${e.value.charAt(0)}${e.value.slice(1).toLowerCase()}`;
                        if (incomeCategories.map(ic => ic.type).includes(modifiedCategory)) {
                            setFormData({...formData, type: "Income", category: modifiedCategory});
                        } else if (expenseCategories.map(ec => ec.type).includes(modifiedCategory)) {
                            setFormData({...formData, type: "Expense", category: modifiedCategory});
                        }
                        break;
                    case 'date':
                        setFormData({...formData, date: e.value});
                        break;
                    default:
                        break;
                }
            })
        }
    }, [segment]);

    return (
        <Grid container={true} spacing={2}>
            <Grid item={true} xs={12}>
                <Typography variant={"subtitle2"} align={"center"} gutterBottom>
                    {segment ? (
                        <div className="segment">
                            {segment.words.map((w) => w.value).join(" ")}
                        </div>
                    ) : <>...</>}
                </Typography>
            </Grid>
            <Grid item={true} xs={6}>
                <FormControl fullWidth={true}>
                    <InputLabel>Type</InputLabel>
                    <Select
                        value={formData.type}
                        onChange={e => setFormData({...formData, type: e.target.value})}>
                        <MenuItem value={"Income"}>Income</MenuItem>
                        <MenuItem value={"Expense"}>Expense</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item={true} xs={6}>
                <FormControl fullWidth={true}>
                    <InputLabel>Category</InputLabel>
                    <Select
                        value={formData.category}
                        onChange={e => setFormData({...formData, category: e.target.value})}
                    >
                        {selectedCategories.map((category) => <MenuItem key={category.type}
                                                                        value={category.type}>{category.type}</MenuItem>)}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item={true} xs={6}>
                <TextField
                    value={formData.amount}
                    onChange={e => setFormData({...formData, amount: e.target.value})}
                    type={"number"}
                    label={"Amount"}
                    fullWidth={true}
                />
            </Grid>
            <Grid item={true} xs={6}>
                <TextField
                    value={formData.date}
                    onChange={e => setFormData({...formData, date: e.target.value})}
                    type={"date"}
                    label={"Date"}
                    fullWidth={true}
                />
            </Grid>
            <Button fullWidth={true} variant={"contained"} className={classes.button} onClick={addTransaction}>Create
                Expense</Button>
        </Grid>
    );
};

export default Form;