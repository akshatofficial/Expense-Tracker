import React from 'react';
import {Card, CardHeader, CardContent, Typography, Grid, Divider, Button} from '@material-ui/core';

import useStyle from './style';

import { useHistory } from 'react-router-dom';

import Form from "./Form/Form";
import List from './List/List';

const Main = () => {

    const classes = useStyle();

    const history = useHistory();

    const handleShowTransaction = () => {
        history.push("/showTransactions");
    }

    return (
        <>
            <Card className={classes.root}>
                <CardHeader
                    title={"Expense Tracker"}
                    subheader={"Powered by speechly"}
                />
                <CardContent>
                    <Button variant={"contained"} color={"primary"} onClick={handleShowTransaction}>Show Expense Transactions</Button>
                    <Typography variant={"h6"} align={"center"}>
                        Total Balance: <strong>&#x20B9;100</strong>
                    </Typography>
                    <Typography variant={"subtitle2"} style={{marginTop: "5px"}}><strong>Try
                        saying:</strong>Add income for &#x20B9;1000 in category salary for Monday</Typography>
                    <Divider/>
                    <Form/>
                </CardContent>
                {/*<CardContent className={classes.cardContent}>*/}
                {/*    <Grid container={true} spacing={2}>*/}
                {/*        <Grid item xs={12}>*/}
                {/*            <List/>*/}
                {/*        </Grid>*/}
                {/*    </Grid>*/}
                {/*</CardContent>*/}
            </Card>
        </>
    );
};

export default Main;