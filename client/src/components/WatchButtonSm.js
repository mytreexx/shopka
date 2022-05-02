import { styled } from '@mui/system'
import { Button } from '@mui/material'


export const WatchButtonSm = styled(Button)(({ theme }) => ({
    backgroundColor: 'transparent',
    border: `1px solid ${theme.palette.secondary.main}`,
    color: theme.palette.primary.main,
    textTransform: 'none',
    height: 32,
    width: 88,
    fontSize: 14,
    fontWeight: 500,
    '& *': {
        marginInline: 4,
    }
}))
