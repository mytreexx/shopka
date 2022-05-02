import { Grid } from '@mui/material'

import { useStyles } from '../styles/global'
import Logo from './Logo'
import SearchBar from './SearchBar'
import UserSection from './UserSection'


const Navbar = () => {
    const classes = useStyles()

    return (
        <Grid container className={classes.navbarContainer} alignItems='center' justifyContent='space-between' spacing={3}>
            <Grid item xs={12} md={3}>
                <Logo />
            </Grid>

            <Grid item xs={12} md={9}>
                <Grid container alignItems='center' justifyContent='space-between' spacing={3}>
                    <Grid item xs={12} md={8}>
                        <SearchBar />
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Grid container justifyContent='flex-end'>
                            <Grid item>
                                <UserSection />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Navbar
