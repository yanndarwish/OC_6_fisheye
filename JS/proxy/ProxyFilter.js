class ProxyFilter {
    constructor() {
        this.cache =[]
    }

    async sorter(medias, option) {
        console.log('cache array before')
        console.log(this.cache)

        const cachedResult = this.cache.find(elt => elt.key === option)

        if (cachedResult) {
            console.log('get from cache')
            console.log(cachedResult)
            return cachedResult
        }

        const filteredData = Filter.filter(medias, option)

        // console.log(filteredData)
        this.cache.push(filteredData)
        console.log('cache array after')
        console.log(this.cache)

        return filteredData
    }
}

// BYPASSED BECAUSE OF THE CACHE MALFUNCTION, CHECK FILTERFORM.JS TO REACTIVATE