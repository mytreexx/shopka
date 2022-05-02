import { useEffect } from 'react'

import { observer } from 'mobx-react'
import userStore from '../store/userStore'
import watchlistStore from '../store/watchlistStore'

import { Avatar, Grid } from '@mui/material'
import { WatchButtonLg } from './WatchButtonLg'
import { Link } from 'react-router-dom'
import { StyledBadge } from './StyledBadge'


const UserSection = observer(() => {
    useEffect(() => {
        userStore.getCurrentUser()
    }, [])

    return (
        <Grid container spacing={3}>
            <Grid item>
                <StyledBadge badgeContent={watchlistStore.watchlist.length}>
                    <Link to='/watchlist' style={{ textDecoration: 'none' }}>
                        <WatchButtonLg variant='outlined'>
                            Watch
                        </WatchButtonLg>
                    </Link>
                </StyledBadge>
            </Grid>

            <Grid item>
                <Avatar src={userStore?.user?.img_url} />
            </Grid>
        </Grid>
    )
})

export default UserSection
