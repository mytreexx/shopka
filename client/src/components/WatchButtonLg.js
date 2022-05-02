import { styled } from '@mui/system'
import { Button } from '@mui/material'


export const WatchButtonLg = styled(Button)(({ theme }) => ({
    backgroundColor: 'transparent',
    border: `1px solid ${theme.palette.secondary.main}`,
    color: theme.palette.primary.main,
    textTransform: 'none',
    height: 40,
    width: 105,
    fontSize: 20,
    fontWeight: 700,
    fontFamily: theme.typography.Quicksand.fontFamily,
    '& > *': {
        textDecoration: 'none!important'
    }
}))
