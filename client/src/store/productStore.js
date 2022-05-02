import { makeAutoObservable } from 'mobx'
import axios from 'axios'

const serverUrl = process.env.REACT_APP_SERVER_URL || 'api';

class ProductStore {
    constructor() {
        makeAutoObservable(this)
    }

    products = []

    filters = {
        searchTerm: '',
        sortBy: '',
        priceRange: [0, 1000],
        minRating: 0,
        isWatched: false
    }

    getProducts = async () => {
        try {
            const res = await axios.get(`${serverUrl}/product`, { params: this.filters })
            if (res.status === 200) {
                this.products = res.data
            } else {
                console.error(res.error)
            }

        } catch (error) {
            console.error(error)
        }
    }
}

const productStore = new ProductStore()

export default productStore