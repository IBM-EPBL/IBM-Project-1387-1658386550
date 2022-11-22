import { useContext } from "react"
import { expenseCategories, incomeCategories, resetCategories } from "./constants/categories";
import { ExpenseTrackerContext } from "./context/context"


const useTransactions = (title) => {
    resetCategories();
    const { transactions } = useContext(ExpenseTrackerContext);
    const transactionsPerType = transactions.filter((t) => t.type === title);
    const total = transactionsPerType.reduce((acc, currVal) => acc += currVal.amount, 0);
    const categories = title === 'Income' ? incomeCategories : expenseCategories;
    var month = "";
    var monthIncomeTotal = [
        {m:"January", amount:0},
        {m:"February", amount:0},
        {m:"March", amount:0},
        {m:"April", amount:0},
        {m:"May", amount:0},
        {m:"June", amount:0},
        {m:"July", amount:0},
        {m:"August", amount:0},
        {m:"September", amount:0},
        {m:"October", amount:0},
        {m:"November", amount:0},
        {m:"December", amount:0},
    ];
    var monthExpenseTotal = [
        {m:"January", amount:0},
        {m:"February", amount:0},
        {m:"March", amount:0},
        {m:"April", amount:0},
        {m:"May", amount:0},
        {m:"June", amount:0},
        {m:"July", amount:0},
        {m:"August", amount:0},
        {m:"September", amount:0},
        {m:"October", amount:0},
        {m:"November", amount:0},
        {m:"December", amount:0},
    ];

    // transactionsPerType.forEach((t) => {
    //     console.log(t.amount, t.category, t.type);
    // })

    transactionsPerType.forEach((t) => {

        month = t.date.slice(5, 7);
        if (t.type === 'Income') {
            switch(month) {
                case '01': monthIncomeTotal[0].amount += t.amount;break;
                case '02': monthIncomeTotal[1].amount += t.amount;break;
                case '03': monthIncomeTotal[2].amount += t.amount;break;
                case '04': monthIncomeTotal[3].amount += t.amount;break;
                case '05': monthIncomeTotal[4].amount += t.amount;break;
                case '06': monthIncomeTotal[5].amount += t.amount;break;
                case '07': monthIncomeTotal[6].amount += t.amount;break;
                case '08': monthIncomeTotal[7].amount += t.amount;break;
                case '09': monthIncomeTotal[8].amount += t.amount;break;
                case '10': monthIncomeTotal[9].amount += t.amount;break;
                case '11': monthIncomeTotal[10].amount += t.amount;break;
                case '12': monthIncomeTotal[11].amount += t.amount;break;
                default: break;
            }
        }
        else if(t.type === 'Expense') {
            switch(month) {
                case '01': monthExpenseTotal[0].amount += t.amount;break;
                case '02': monthExpenseTotal[1].amount += t.amount;break;
                case '03': monthExpenseTotal[2].amount += t.amount;break;
                case '04': monthExpenseTotal[3].amount += t.amount;break;
                case '05': monthExpenseTotal[4].amount += t.amount;break;
                case '06': monthExpenseTotal[5].amount += t.amount;break;
                case '07': monthExpenseTotal[6].amount += t.amount;break;
                case '08': monthExpenseTotal[7].amount += t.amount;break;
                case '09': monthExpenseTotal[8].amount += t.amount;break;
                case '10': monthExpenseTotal[9].amount += t.amount;break;
                case '11': monthExpenseTotal[10].amount += t.amount;break;
                case '12': monthExpenseTotal[11].amount += t.amount;break;
                default: break;
            }
        }
        
        
        const category = categories.find((c) => c.type === t.category);

        if (category) category.amount += t.amount;
    });




    const filteredCategories = categories.filter((c) => c.amount > 0);

    const chartData = {
        datasets: [{
            data: filteredCategories.map((c) => c.amount),
            backgroundColor: filteredCategories.map((c) => c.color),
        }],
        labels: filteredCategories.map((c) => c.type)
    };



    const chartDataIncome = {
        datasets: [
            {
                label: 'Income',
                data: monthIncomeTotal.map((m) => m.amount),
                borderColor: '#165f40',
                backgroundColor: '#0bc77e', 
                tension: 0.1,
            }, 
            
        ], 
        labels: monthIncomeTotal.map((m) => m.m)
    };

    const chartDataExpense = {
        datasets: [
            {
                label: 'Expense',
                data: monthExpenseTotal.map((m) => m.amount),
                borderColor: '#b50d12',
                backgroundColor: '#e57c58', 
                tension: 0.1,
            },
        ], 
        labels: monthExpenseTotal.map((m) => m.m)
    };


    return { total, chartData, chartDataIncome, chartDataExpense };
};


export default useTransactions;