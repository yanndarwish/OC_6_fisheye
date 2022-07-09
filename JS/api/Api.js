
class Api {
    constructor(url) {
        this._url = url
    }

    async get() {
        return fetch(this._url)
            .then(res => res.json())
            .catch(err => console.log('an error has occured', err))
    }
}
/* exported DataApi */
class DataApi extends Api {
    constructor(url) {
        super(url)
    }

    async getData() {
        return await this.get()
    }
}