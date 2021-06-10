import React from 'react';
import {Button, Grid, Paper} from "@material-ui/core";

import useStyle from './style';
import './style.css';

import List from "../Main/List/List";
import Details from "../Details/Details";
import {useHistory} from "react-router-dom";

const ShowTransaction = () => {

    const classes = useStyle();

    const history = useHistory();

    const handleCreateTransaction = () => {
        history.push("/");
    }

    return (
        <>
            <Paper className={classes.paper}>
                <Grid container={true} alignItems={"center"} justify={"center"} spacing={2}>
                    <Grid item={true} xs={12} md={3}>
                        <Paper elevation={8}>
                            <Details title={"Income"}/>
                        </Paper>
                    </Grid>
                    <Grid item={true} xs={12} md={3}>
                        <div style={{
                            margin: "5px",
                            textAlign: "center"
                        }}>
                            <Button variant={"contained"} color={"secondary"} onClick={handleCreateTransaction}>Create
                                Transaction</Button>
                        </div>
                        <Paper elevation={8}>
                            <List/>
                        </Paper>
                    </Grid>
                    <Grid item={true} xs={12} md={3}>
                        <Paper elevation={8}>
                            <Details title={"Expense"}/>
                        </Paper>
                    </Grid>
                </Grid>
            </Paper>
        </>
    );
};

export default ShowTransaction;