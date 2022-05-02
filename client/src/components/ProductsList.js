import { useState } from 'react'

import { observer } from 'mobx-react'
import watchlistStore from '../store/watchlistStore'
import productStore from '../store/productStore'

import { Grid, Paper } from '@mui/material'
import { useStyles } from '../styles/global'

import SortingFilters from './SortingFilters'
import ProductCardVertical from './ProductCardVertical'
import ProductCardHorizontal from './ProductCardHorizontal'
import Related from './Related'
import NoProducts from './noProducts'


const ProductsList = observer(() => {
    const classes = useStyles()
    const [cardView, setCardView] = useState('thumbnail')

    
    const products = productStore.products

    return (
        <Paper className={classes.productsListContainer}>
            <Grid container>
                <Grid item xs={12}>
                    <SortingFilters cardView={cardView} setCardView={setCardView} />
                </Grid>

                <Grid item xs={12}>
                    <Related />
                </Grid>

                <Grid item xs={12} className={classes.productsListScrollable}>
                    <Grid container justifyContent='center'>
                        {(products.length > 0) ? products.map(product => {
                            return (
                                (cardView === 'list')
                                    ? <ProductCardHorizontal
                                        product={product}
                                        key={product.id}
                                        watchlist={watchlistStore.watchlist}
                                    />
                                    : <ProductCardVertical
                                        product={product}
                                        key={product.id}
                                        watchlist={watchlistStore.watchlist}
                                    />
                            )
                        }) : <NoProducts />}
                    </Grid>

                </Grid>
            </Grid>
        </Paper>
    )
})

export default ProductsList
