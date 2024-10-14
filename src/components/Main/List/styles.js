import { styled } from '@mui/material/styles';
import { Avatar } from '@mui/material';
import { red, blue } from '@mui/material/colors';

export const AvatarIncome = styled(Avatar)({
  color: blue[50], // Text color
  backgroundColor: blue[500], // Background color
});

export const AvatarExpense = styled(Avatar)(({ theme }) => ({
  color: theme.palette.getContrastText(red[500]),
  backgroundColor: red[500],
}));

export const StyledList = styled('div')({
  maxHeight: '150px',
  overflow: 'auto',
});
