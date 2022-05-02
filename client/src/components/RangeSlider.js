import { useMemo } from 'react'

import { observer } from 'mobx-react'
import productStore from '../store/productStore'

import { Grid, Paper } from '@mui/material'
import { Box } from '@mui/system'
import { useStyles } from '../styles/global'
import { StyledSlider } from './StyledSlider'

import debounce from '../utils/debounce'


const SideFilters = observer(() => {
    const classes = useStyles()

    const getFilteredProducts = useMemo(() => debounce(() => {
        productStore.getProducts()
    }), [])

    const handleSlideChange = (value) => {
        productStore.filters.priceRange = value
        getFilteredProducts(value)
    }


    return (
        <Grid container>
            <Grid item>
                <div className={classes.filterTitle}>Price Range Selected</div>
            </Grid>

            <Grid item xs={12}>
                <Box className={classes.sliderBox}>
                    <Paper elevation={0} className={classes.sliderPaper}>
                        <Grid container justifyContent='space-between'>
                            <Grid item>
                                <span className={classes.priceRange}>${productStore.filters.priceRange[0]}</span>
                            </Grid>

                            <Grid item>
                                <span className={classes.priceRange}>${productStore.filters.priceRange[1]}</span>
                            </Grid>
                        </Grid>

                        <Grid container justifyContent='center'>
                            <Grid item xs={11}>
                                <StyledSlider
                                    min={10}
                                    color='secondary'
                                    max={1000}
                                    disableSwap
                                    value={productStore.filters.priceRange}
                                    onChange={(e, newValue) => { handleSlideChange(newValue) }}
                                    valueLabelDisplay='auto'
                                />
                            </Grid>
                        </Grid>
                    </Paper>
                </Box>
            </Grid>
        </Grid>
    )
})

export default SideFilters
