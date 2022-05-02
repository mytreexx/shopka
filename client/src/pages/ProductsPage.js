import { useEffect } from 'react'

import { Grid } from '@mui/material'

import ProductsList from '../components/ProductsList'
import SideFilters from '../components/SideFilters'

import productStore from '../store/productStore'
import watchlistStore from '../store/watchlistStore'

import { Helmet } from 'react-helmet-async'


const ProductsPage = ({ onlyWatchlist }) => {
    useEffect(() => {
        productStore.filters.isWatched = !!onlyWatchlist
        productStore.getProducts()
    }, [onlyWatchlist])

    useEffect(() => {
        watchlistStore.getWatchlist()
    }, [])

    const title = onlyWatchlist ? 'Shopka - Watchlist' : 'Shopka'

    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>

            <Grid container>
                <Grid item xs={12} md={3}>
                    <SideFilters />
                </Grid>

                <Grid item xs={12} md={9}>
                    <ProductsList />
                </Grid>
            </Grid>
        </>
    )
}

export default ProductsPage
