import { observer } from 'mobx-react'
import productStore from '../store/productStore'

import { Grid, Select, MenuItem, FormControl, InputLabel } from '@mui/material'
import { useStyles } from '../styles/global'
import { TabButton } from './TabButton'
import { ReactComponent as ListView } from '../assets/listView.svg'
import { ReactComponent as ThumbnailView } from '../assets/thumbnailView.svg'
import clsx from 'clsx'


const SortingFilters = observer(({ cardView, setCardView }) => {
    const classes = useStyles()

    const handleChange = (value) => {
        productStore.filters.sortBy = value
        productStore.getProducts()
    }

    return (
        <Grid container justifyContent='space-between'>
            <Grid item className={classes.selectContainer}>
                <FormControl fullWidth size='small'>
                    <InputLabel className={classes.labelText}>
                        SORT BY
                    </InputLabel>
                    <Select
                        className={classes.selectInput}
                        value={productStore.filters.sortBy}
                        onChange={(e) => { handleChange(e.target.value) }}
                    >
                        <MenuItem value='price-ASC'>Price: low - high</MenuItem>
                        <MenuItem value='price-DESC'>Price: high - low</MenuItem>
                        <MenuItem value='rating-DESC'>Rating</MenuItem>
                    </Select>
                </FormControl>
            </Grid>

            <Grid item>
                <TabButton
                    onClick={() => setCardView('list')}
                    className={clsx(
                        { [classes.selectedView]: cardView === 'thumbnail' }
                    )}
                >
                    <ListView />
                </TabButton>

                <TabButton
                    onClick={() => setCardView('thumbnail')}
                    className={clsx(
                        { [classes.selectedView]: cardView === 'list' }
                    )}
                >
                    <ThumbnailView />
                </TabButton>
            </Grid>
        </Grid>
    )
})

export default SortingFilters
