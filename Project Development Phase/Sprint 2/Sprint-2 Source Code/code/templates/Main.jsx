import React from 'react';
import { Card, CardContent, Typography, Grid, Divider } from '@mui/material';
import './main.css';
import Form from './Form/Form';
import List from './List/List';
import { useContext } from 'react';
import { ExpenseTrackerContext } from '../../context/context';
import InfoCard from '../InfoCard';
import useTransactions from '../../useTransactions';

const Main = () => {

    const { balance } = useContext(ExpenseTrackerContext);
    const { total: incomeTotal } = useTransactions("Income");
    const { total: expenseTotal } = useTransactions("Expense");

    return (
        <Card style={{width: '370px', padding: '10px', backgroundColor: "transparent" }}>
            {/*<CardHeader className="cardHeader" title="Personal Expense Tracker" subheader="speak to track" />*/}
            <CardContent className="cardContent1">

                <Typography style={{ color: 'rgb(144 122 0)' }} align="center" variant="h6">
                    Total Balance: <span style={{ color: 'goldenrod' }}>Rs.{balance}</span>
                </Typography>

                <Typography style={{ color: 'green' }} align="center" variant="h6">
                    Income: <span style={{ color: 'rgba(0, 255, 0, 0.9)' }}>Rs.{incomeTotal}</span>
                </Typography>

                <Typography style={{ color: 'red' }} align="center" variant="h6">
                    Expense: <span style={{ color: 'rgba(255, 0, 0, 0.8)' }}>Rs.{expenseTotal}</span>
                </Typography>

                <Typography variant="subtitle1" style={{ lineHeight: '1.5em', marginTop: '20px' }} >
                    <InfoCard />
                </Typography>
                <Divider style={{ borderTop: '1px dashed gray', backgroundColor: 'white', paddingTop: '15px' }} />
                <Form />
            </CardContent>
            <CardContent className="cardContent2">
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <List />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default Main;