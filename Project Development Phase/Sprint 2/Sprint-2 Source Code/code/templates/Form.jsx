import React, { useContext, useEffect, useState } from 'react';
import { TextField, Typography, Grid, FormControl, InputLabel, Select, MenuItem, OutlinedInput } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import './form.css';
import { ExpenseTrackerContext } from '../../../context/context';
import { expenseCategories, incomeCategories } from '../../../constants/categories';
import formatDate from '../../../utils/formatDate';
import { useSpeechContext } from '@speechly/react-client';
import CustomizedSnackbar from '../../Snackbar/Snackbar';

const initialState = {
    amount: '',
    category: '',
    type: 'Income',
    date: formatDate(new Date()),
}

const Form = () => {

    const [formData, setFormData] = useState(initialState);
    const { addTransaction } = useContext(ExpenseTrackerContext);
    const { segment } = useSpeechContext();
    const [open, setOpen] = useState(false);
    const [unfill, setUnfill] = useState(false);

    const createTransaction = () => {

        if (formData.category && formData.amount) {

            const transaction = { ...formData, amount: Number(formData.amount), id: uuidv4() }
            
            addTransaction(transaction);
            setFormData(initialState);
            setOpen(true);
        }
        else {
            setUnfill(true);
            /*swal("Unfulfilled Inputs", "Please fill all the fields", "warning");*/
        }  
    }

    useEffect(() => {
         
        if (segment) {
            if (segment.intent.intent === 'add_expense') {
                setFormData({ ...formData, type: 'Expense' });
            }
            else if (segment.intent.intent === 'add_income') {
                setFormData({ ...formData, type: 'Income' });
            }
            else if (segment.isFinal && segment.intent.intent === 'create_transaction') {
                return createTransaction();
            }
            else if (segment.isFinal && segment.intent.intent === 'cancel_transaction') {
                return setFormData(initialState);
            }

            segment.entities.forEach((e) => {
                const category = `${e.value.charAt(0)}${e.value.slice(1).toLowerCase()}`;

                switch (e.type) {
                    case 'amount':
                        setFormData({ ...formData, amount: e.value });
                        break;
                    case 'category':
                        if (incomeCategories.map((ic) => ic.type).includes(category)) {
                            setFormData({ ...formData, type: 'Income', category });
                        }
                        else if (expenseCategories.map((ec) => ec.type).includes(category)) {
                            setFormData({ ...formData, type: 'Expense', category });
                        }
                        break;
                    case 'date':
                        setFormData({ ...formData, date: e.value }); 
                        break;
                    default:
                        break;
                }
            });

            if (segment.isFinal && formData.type && formData.category && formData.amount && formData.date) {
                createTransaction();
            }
        }

        // eslint-disable-next-line
    }, [segment]);

    const selectedCategories = formData.type === 'Income' ? incomeCategories : expenseCategories;

    return (
        <Grid container spacing={2}>
            <CustomizedSnackbar title="form" open={open} setOpen={setOpen} />
            <CustomizedSnackbar title="unfilled" open={unfill} setOpen={setUnfill} />
            <Grid item xs={12}>
                <Typography align="center" variant="subtitle2" gutterBottom>
                    {segment &&
                        segment.words.map((w) => w.value).join(" ")
                    }
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Type</InputLabel>
                    <Select 
                        value={formData.type} 
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })} 
                        input={<OutlinedInput label="Type" />}
                    >
                        <MenuItem value="Income">Income</MenuItem>
                        <MenuItem value="Expense">Expense</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Category</InputLabel>
                    <Select 
                        value={formData.category} 
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        input={<OutlinedInput label="Category" />}
                    >
                        {
                            selectedCategories.map((c) =>
                                <MenuItem key={c.type} value={c.type}>
                                    {c.type}
                                </MenuItem>)
                        }
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <TextField type="number" onKeyDown={(e) => { e.key === 'e' && e.preventDefault(); e.key === '-' && e.preventDefault(); e.key === '+' && e.preventDefault(); }} label="Amount" fullWidth value={formData.amount} onChange={(e) => setFormData({ ...formData, amount: e.target.value })} />
            </Grid>
            <Grid item xs={6}>
                <TextField type="date" label="Date" fullWidth value={formData.date} onChange={(e) => setFormData({ ...formData, date: formatDate(e.target.value) })} />
            </Grid>
            <button className="createBtn" onClick={createTransaction} >Create</button>
        </Grid>
    );

};


export default Form;