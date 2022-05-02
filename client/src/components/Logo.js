import { Grid, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import { useStyles } from '../styles/global'


const Logo = () => {
    const classes = useStyles()

    return (
        <Link to='/' style={{ textDecoration: 'none' }}>
            <Grid container alignItems='center'>

                <Box className={classes.logoIconContainer}>
                    <span>s</span>
                </Box>

                <Grid item>
                    <span className={classes.logoText}>Shopka</span>
                </Grid>
            </Grid>
        </Link>
    )
}

export default Logo
