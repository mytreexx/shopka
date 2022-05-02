import { observer } from 'mobx-react'
import productStore from '../store/productStore'

import { Grid, Box, Rating } from '@mui/material'
import { useStyles } from '../styles/global'

import clsx from 'clsx'


const RatingFilter = observer(() => {
    const classes = useStyles()

    const handleRatingChange = (value) => {
        if (productStore.filters.minRating === value) {
            productStore.filters.minRating = 0
        } else {
            productStore.filters.minRating = value
        }
        productStore.getProducts()
    }

    return (
        <Grid container>
            <Grid item>
                <div className={classes.filterTitle}>CUSTOMER REVIEWS</div>
            </Grid>

            <Grid item xs={12}>
                <Grid container>
                    {[...Array(5)].map((n, i) => <Box key={i}
                        onClick={() => { handleRatingChange(i + 1) }}
                        className={clsx(classes.ratingButton, {
                            [classes.selected]: productStore.filters.minRating === i + 1
                        })}
                    >
                        <Rating readOnly size='small' value={i + 1} max={i + 1} /> & Up
                    </Box>
                    )}
                </Grid>
            </Grid>
        </Grid>
    )
})

export default RatingFilter