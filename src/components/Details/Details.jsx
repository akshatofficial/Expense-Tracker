import React from 'react';
import {Card, CardHeader, CardContent, Typography} from '@material-ui/core'

import useStyles from './styles';

import {Doughnut} from 'react-chartjs-2';
import UseTransaction from "../../useTransaction";

const Details = ({title}) => {

    const classes = useStyles();

    const {total, chartData} = UseTransaction(title);

    return (
        <>
            <Card className={(title === "Income" ? classes.income : classes.expense)}>
                <CardHeader title={title}/>
                <CardContent>
                    <Typography variant={"h5"}>&#x20B9;{`${total}`}</Typography>
                    <Doughnut data={chartData}/>
                </CardContent>
            </Card>
        </>
    )
};

export default Details;