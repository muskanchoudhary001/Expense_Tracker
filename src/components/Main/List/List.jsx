import React, { useContext } from 'react';
import { List as MUIList, ListItem, ListItemAvatar, ListItemText, ListItemSecondaryAction, IconButton, Slide } from '@mui/material';
import { Delete, MoneyOff } from '@mui/icons-material';

import { AvatarIncome, AvatarExpense, StyledList } from './styles';
import { ExpenseTrackerContext } from '../../../context/Context';

const List = () => {
  const { transactions, deleteTransaction } = useContext(ExpenseTrackerContext);
  return (
    <StyledList>
      <MUIList dense={false}>
        {transactions.map((transaction) => (
          <Slide direction='down' in mountOnEnter unmountOnExit key={transaction.id}>
            <ListItem>
              <ListItemAvatar>
                {transaction.type === 'Income' ? (
                  <AvatarIncome>
                    <MoneyOff />
                  </AvatarIncome>
                ) : (
                  <AvatarExpense>
                    <MoneyOff />
                  </AvatarExpense>
                )}
              </ListItemAvatar>
              <ListItemText primary={transaction.category} secondary={`₹ ${transaction.amount} - ${transaction.date}`} />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete" onClick={() => deleteTransaction(transaction.id)}>
                  <Delete />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </Slide>
        ))}
      </MUIList>
    </StyledList>
  );
};

export default List;
