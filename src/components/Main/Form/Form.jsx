import React, { useState, useContext } from 'react';
import { TextField, Typography, Grid, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Button as StyledButton } from '@mui/material'; // Updated import
import { v4 as uuidv4 } from 'uuid';

import formatDate from '../../../utils/formatDate';
import { ExpenseTrackerContext } from '../../../context/Context'; 
import { incomeCategories, expenseCategories } from '../../../constants/categories';

const initialState = {
  amount: '',
  category: '',
  type: 'Income',
  date: formatDate(new Date()),
};

const Form = () => {
  const [form, setForm] = useState(initialState);
  const { addTransaction } = useContext(ExpenseTrackerContext);

  const createTransaction = () => {
    const transaction = { ...form, amount: Number(form.amount), id: uuidv4() };
    addTransaction(transaction);
    setForm(initialState);
  };
  
  const selectedCategories = form.type === 'Income' ? incomeCategories : expenseCategories;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography align='center' variant='subtitle2' gutterBottom>
          ...
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}>
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expense">Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}>
            {selectedCategories.map((c) => (
              <MenuItem key={c.type} value={c.type}>
                {c.type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField 
          type='number' 
          label='Amount' 
          fullWidth  
          value={form.amount} 
          onChange={(e) => setForm({ ...form, amount: e.target.value })} 
        />
      </Grid>
      <Grid item xs={6}>
        <TextField 
          type='date' 
          label='Date' 
          fullWidth 
          value={form.date} 
          onChange={(e) => setForm({ ...form, date: formatDate(e.target.value) })} 
        />
      </Grid>
      <Grid item xs={12}>
        <StyledButton variant="outlined" color='primary' fullWidth onClick={createTransaction}>
          Create
        </StyledButton>
      </Grid>
    </Grid>
  );
};

export default Form;
