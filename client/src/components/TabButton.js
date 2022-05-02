import { styled } from '@mui/system'
import { Button } from '@mui/material'


export const TabButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.background.secondary,
    color: theme.palette.primary.main,
    textTransform: 'none',
    height: 36,
    width: 68,
}))
