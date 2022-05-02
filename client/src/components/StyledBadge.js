import { Badge } from '@mui/material'
import { styled } from '@mui/system'


export const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        color: 'white',
        backgroundColor: '#F44336',
        padding: '0 4px',
    },
}))
