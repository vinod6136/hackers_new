import axios from 'axios';

axios.defaults.baseURL = 'https://hacker-news.firebaseio.com/v0/';

export const api = {
    topLists: () => {
        return new Promise((resolve, reject) => {
            axios.get('/topstories.json')
                .then(
                    res => {
                        resolve(res.data)
                    },
                    error => {
                        reject(error)
                    })
        })
    },
    newStories: () => {
        return new Promise((resolve, reject) => {
            axios.get('/newstories.json')
                .then(
                    res => {
                        resolve(res.data)
                    },
                    error => {
                        reject(error)
                    })
        })
    },
    askStories: () => {
        return new Promise((resolve, reject) => {
            axios.get('/askstories.json')
                .then(
                    res => {
                        resolve(res.data)
                    },
                    error => {
                        reject(error)
                    })
        })
    },
    jobs: () => {
        return new Promise((resolve, reject) => {
            axios.get('/jobstories.json')
                .then(
                    res => {
                        resolve(res.data)
                    },
                    error => {
                        reject(error)
                    })
        })
    },
    showStories: () => {
        return new Promise((resolve, reject) => {
            axios.get('/showstories.json')
                .then(
                    res => {
                        resolve(res.data)
                    },
                    error => {
                        reject(error)
                    })
        })
    },
    itemData: (id) => {
        return new Promise((resolve, reject) => {
            axios.get(`/item/${id}/.json`)
                .then(
                    res => {
                        resolve(res.data)
                    },
                    error => {
                        reject(error)
                    })
        })
    }
};
