import React from 'react';
import { List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide } from '@mui/material';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import DeleteIcon from '@mui/icons-material/Delete';

import { useContext } from 'react';
import { ExpenseTrackerContext } from '../../../context/context';
import { useState } from 'react';
import CustomizedSnackbar from '../../Snackbar/Snackbar';
import './list.css';

const List = () => {

    const { deleteTransaction, transactions } = useContext(ExpenseTrackerContext);
    const [open, setOpen] = useState(false);


    return (
        <MUIList dense={false} className='listContainer'>
            <CustomizedSnackbar title="list" open={open} setOpen={setOpen} />

            {transactions.map((transaction) => (
                <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar style={{backgroundColor: transaction.type === 'Income' ? 'green' : 'red'}} >
                                <CurrencyRupeeIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={transaction.category} secondary={`Rs.${transaction.amount} - ${transaction.date}`} />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete" onClick={() => { setOpen(true); deleteTransaction(transaction.id) }} >
                                <DeleteIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </Slide>
            ))}
        </MUIList>
    );
}


export default List;