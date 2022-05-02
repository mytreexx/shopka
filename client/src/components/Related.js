import productStore from '../store/productStore'

import { Grid } from '@mui/material'
import { useStyles } from '../styles/global'
import RoundedContainer from './RoundedContainer'

import clsx from 'clsx'


const Related = () => {
    const classes = useStyles()

    const relatedLabels = ['free shipping', 'kitten', 'plastic useless', 'pucker shoes', 'vintage typewriter']

    const handleLabelClick = (label) => {
        if (label === productStore.filters.searchTerm) {
            productStore.filters.searchTerm = ''
        } else {
            productStore.filters.searchTerm = label
        }
        productStore.getProducts()
    }

    return (
        <Grid container spacing={1} className={classes.relatedContainer}>
            {relatedLabels.map(label =>
                <Grid item key={label}>
                    <RoundedContainer
                        onClick={() => { handleLabelClick(label) }}
                        className={clsx(classes.relatedLabel, {
                            [classes.selected]: productStore.filters.searchTerm === label
                        })}
                    >
                        {label}
                    </RoundedContainer>
                </Grid>

            )}
        </Grid>
    )
}

export default Related