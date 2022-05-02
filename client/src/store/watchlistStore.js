import { makeAutoObservable } from 'mobx'
import axios from 'axios'

const serverUrl = process.env.REACT_APP_SERVER_URL || 'api';

class WatchlistStore {
    constructor() {
        makeAutoObservable(this)
    }

    watchlist = {}

    getWatchlist = async () => {
        try {
            const res = await axios.get(`${serverUrl}/watchlist`)
            if (res.status === 200) {
                this.watchlist = res.data
            } else {
                console.error(res.error)
            }

        } catch (error) {
            console.error(error)
        }
    }

    addWatch = async (id) => {
        try {
            const res = await axios.post(`${serverUrl}/watchlist`, { product_id: id })
            if (res.status === 200) {
                this.watchlist = res.data
            } else {
                console.error(res.error)
            }

        } catch (error) {
            console.error(error)
        }
    }

    removeWatch = async (id) => {
        try {
            const res = await axios.delete(`${serverUrl}/watchlist`, { 
                params: {
                    product_id: id
                }
             })
            if (res.status === 200) {
                this.watchlist = res.data
            } else {
                console.error(res.error)
            }

        } catch (error) {
            console.error(error)
        }
    }
}

const watchlistStore = new WatchlistStore()

export default watchlistStore