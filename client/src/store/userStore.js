import { makeAutoObservable } from 'mobx'
import axios from 'axios'

const serverUrl = process.env.REACT_APP_SERVER_URL || 'api';

class UserStore {
    constructor() {
        makeAutoObservable(this)
    }

    user = {}

    getCurrentUser = async () => {
        try {
            const res = await axios.get(`${serverUrl}/user`)
            if (res.status === 200) {
                this.user = res.data
            } else {
                console.error(res.error)
            }

        } catch (error) {
            console.error(error)
        }
    }
}

const userStore = new UserStore()

export default userStore