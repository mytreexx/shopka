import { useMemo } from 'react'

import { Grid, Rating } from '@mui/material'

import { ReactComponent as HeartIcon } from '../assets/heart.svg'
import { useStyles } from '../styles/global'

import watchlistStore from '../store/watchlistStore'
import { SaleLabel } from './SaleLabel'
import { WatchButtonSm } from './WatchButtonSm'


const ProductCardVertical = (props) => {
    const classes = useStyles()
    const { product, watchlist } = props
    const isWatched = useMemo(() => watchlist.some(watchedItem => watchedItem === product.id), [product, watchlist])

    const handleWatch = (id) => {
        if (isWatched) {
            watchlistStore.removeWatch(id)
        } else {
            watchlistStore.addWatch(id)
        }
    }

    return (
        <Grid item className={classes.productCardContainer}>
            <Grid container justifyContent='center'>
                <img width='227' alt='product' src={product.img_url} />
            </Grid>

            <Grid container className={classes.productInfo}>
                <p className={classes.productName}>{product.product_name}</p>
                <Grid item xs={11}>
                    <Grid container justifyContent='space-between' alignItems='center'>
                        <Grid item>
                            <span className={classes.productPrice}>{product.price}$</span>
                        </Grid>

                        <Grid item>
                            {product.label && <SaleLabel>{product.label}</SaleLabel>}
                        </Grid>
                    </Grid>
                </Grid>
                <p className={classes.productDescription}>{product.product_description}</p>
            </Grid>

            <Grid container justifyContent='space-between' alignItems='center' alignSelf='flex-end'>
                <Grid item>
                    <Grid container alignItems='center'>
                        <Rating
                            readOnly
                            size='small'
                            value={product.rating}
                            max={product.rating}
                        />
                        <span>{product.rating}</span>
                    </Grid>
                </Grid>

                <WatchButtonSm onClick={() => { handleWatch(product.id) }}>
                    {isWatched ? 'Watched' : <><HeartIcon /> Watch</>}
                </WatchButtonSm>
            </Grid>

        </Grid>
    )
}

export default ProductCardVertical
