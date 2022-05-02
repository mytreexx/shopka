import { Grid } from '@mui/material'

import RangeSlider from './RangeSlider'
import RatingFilter from './RatingFilter'


const SideFilters = () => {
    return (
        <Grid container justifyContent='center'>
            <Grid item xs={10}>
                <RangeSlider />
            </Grid>

            <Grid item xs={10}>
                <RatingFilter />
            </Grid>
        </Grid>
    )
}

export default SideFilters
