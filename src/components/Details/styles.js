import { styled } from '@mui/material/styles';
import { Card } from '@mui/material';

export const IncomeCard = styled(Card)(({ theme }) => ({
  border: '1px solid white',
  borderBottom: '3px solid blue',
  padding: 20,
  margin: 10,
  '&.income': {
    backgroundColor: '#F0E68C',
    border: '5px solid transparent',  // Set a transparent border on all sides
    borderBottomColor: 'green',
  },
  '&.expense': {
    backgroundColor: '#6CB4EE',
    borderBottom: '5px solid blue',
  }
}));
