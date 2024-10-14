import React from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@mui/material';
import { RootCard, CardContentStyled } from './styles';
import Form from './Form/Form';
import List from './List/List'
const Main = () => {
  return (
    <RootCard>
      <CardHeader title="Expense Tracker" subheader="Powered by Speechly" />
      <CardContent>
        <Typography align='center' variant='h5'>Total Balance ₹100 </Typography>
        <Typography variant='subtitle1' style={{ lineHeight: '1.5em', marginTop: '20px' }}>
          Try saying: Add income for ₹100 in category Salary for Monday...
        </Typography>
        <Divider />
        <Form />
      </CardContent>
      <CardContentStyled>
        <Grid container spacing={2}>
          <Grid item xs={12}>
             <List />
          </Grid>
        </Grid>
      </CardContentStyled>
    </RootCard>
  );
};

export default Main;

