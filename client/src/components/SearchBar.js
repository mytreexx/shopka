import { useMemo } from 'react'

import productStore from '../store/productStore'
import { observer } from 'mobx-react'

import { IconButton, InputBase } from '@mui/material'
import { ReactComponent as Magnifier } from '../assets/magnifier.svg'
import { ReactComponent as CloseIcon } from '../assets/closeIcon.svg'
import { useStyles } from '../styles/global'
import RoundedContainer from './RoundedContainer'

import debounce from '../utils/debounce'


const SearchBar = observer(() => {
    const classes = useStyles()

    const getSearchedResultesDebounced = useMemo(() => debounce(() => {
        productStore.getProducts()
    }), [])


    const handleSearch = (value) => {
        productStore.filters.searchTerm = value
        getSearchedResultesDebounced(value)
    }

    return (
        <RoundedContainer>
            <InputBase
                value={productStore.filters.searchTerm}
                onChange={(e) => { handleSearch(e.target.value) }}
                className={classes.searchInput}
                startAdornment={<IconButton><Magnifier /></IconButton>}
                endAdornment={<IconButton onClick={() => handleSearch('')}><CloseIcon /></IconButton>}
            />
        </RoundedContainer>
    )
})

export default SearchBar
