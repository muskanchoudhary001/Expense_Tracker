import { styled } from "@mui/material";
import { Box } from "@mui/system";

export const Desktop = styled('div')(({theme}) => ({
    [theme.breakpoints.up('sm')]: {
        display : 'none',
    },
}))

export const Mobile = styled('div')(({theme}) => ({
    [theme.breakpoints.down('sm')]: {
        display : 'none',
    },
}))

export const Main = styled(Box)(({theme}) => ({
    [theme.breakpoints.up('sm')]: {
        paddingBottom: '5%',
    },
}))

export const Last = styled(Box)(({theme}) => ({
    [theme.breakpoints.down('sm')]: {
         marginBottom: theme.spacing(3),
         paddingBottom: '200px',
    },
}))

export const Grid = styled( Box)(({theme}) => ({
    '& > *': {
         margin: theme.spacing(2),
    },
}))