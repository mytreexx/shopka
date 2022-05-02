import { useMemo } from 'react'

import { Grid, Rating } from '@mui/material'

import { WatchButtonSm } from './WatchButtonSm'
import { ReactComponent as HeartIcon } from '../assets/heart.svg'
import { useStyles } from '../styles/global'
import watchlistStore from '../store/watchlistStore'
import { SaleLabel } from './SaleLabel'


const ProductCardHorizontal = (props) => {
    const classes = useStyles()
    const { product, watchlist } = props
    const isWatched = useMemo(() => watchlist?.some(watchedItem => watchedItem === product.id), [product, watchlist])

    const handleWatch = (id) => {
        if (isWatched) {
            watchlistStore.removeWatch(id)
        } else {
            watchlistStore.addWatch(id)
        }
    }

    return (
        <Grid item className={classes.productCardContainerHorizontal}>
            <Grid container alignItems='center' justifyContent='space-between'>
                <Grid item xs={5}>
                    <img className={classes.image} alt='product' src={product.img_url} />
                </Grid>
                <Grid item xs={7}>
                    <Grid container justifyContent='space-between' alignItems='center'>
                        <Grid item>
                            <Grid container alignItems='center'>
                                <Rating
                                    readOnly
                                    size='small'
                                    value={Math.floor(product.rating)}
                                    max={Math.floor(product.rating)}
                                />
                                <span>{product.rating}</span>
                            </Grid>
                        </Grid>

                        <Grid item>
                            {product.label && <SaleLabel>{product.label}</SaleLabel>}
                        </Grid>

                        <Grid item>
                            <span className={classes.productPrice}>{product.price}$</span>
                        </Grid>
                    </Grid>

                    <Grid container>
                        <p className={classes.productNameHorizontal}>{product.product_name}</p>

                        <p className={classes.productDescriptionHorizontal}>{product.product_description}</p>
                    </Grid>

                    <Grid container>
                        <WatchButtonSm onClick={() => { handleWatch(product.id) }}>
                            {isWatched ? 'Watched' : <><HeartIcon /> Watch</>}
                        </WatchButtonSm>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ProductCardHorizontal
