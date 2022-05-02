import { styled } from '@mui/system'
import { Box } from '@mui/material'


export const SaleLabel = styled(Box)(({ theme }) => ({
    backgroundColor: '#ECF7ED',
    color: '#37833B',
    textTransform: 'none',
    fontSize: 12,
    paddingBlock: 4,
    paddingInline:10,
    fontFamily: theme.typography.Roboto.fontFamily,
    borderRadius: 4,
    fontWeight: 500,
    '& *': {
        marginInline: 4,
    }
}))
