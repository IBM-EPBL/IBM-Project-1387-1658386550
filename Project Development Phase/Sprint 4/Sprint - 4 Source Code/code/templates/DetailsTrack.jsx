import React from 'react';
import { Line } from 'react-chartjs-2';
import useTransactions from '../../useTransactions';
import './detailsTrack.css';

const DetailsTrack = ({ title }) => {

    const { chartDataIncome, chartDataExpense } = useTransactions(title);

    const chartData = (title === 'Income') ? chartDataIncome : chartDataExpense;

    return (
        <div className='chartContainer'>
            <div className={title === 'Income' ? 'incomeChart' : 'expenseChart'} >
                <Line data={chartData} />
            </div>
        </div>
    );
};

export default DetailsTrack;