import { styled } from '@mui/material/styles';
import { Card, CardContent } from '@mui/material';

export const RootCard = styled(Card)(({ theme }) => ({
  margin: '30px',
  padding: '20px',
}));

export const CardContentStyled = styled(CardContent)(({ theme }) => ({
  paddingTop: 0,
}));
