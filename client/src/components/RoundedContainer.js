import { styled } from '@mui/system'


const RoundedContainer = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.main,
    borderRadius: 99,
}))

export default RoundedContainer
