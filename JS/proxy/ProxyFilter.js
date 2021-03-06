/*global Filter*/
class ProxyFilter {
    constructor() {
        this.cache = []
    }
    sorter(medias, option) {
        // parse the stringified cache to manipulate
        const parsedCache = this.cache.map(elt => JSON.parse(elt))
        const cachedResult = parsedCache.find(elt => elt.key === option)  

        if (cachedResult) {
            return cachedResult
        }
        
        let filteredData = Filter.mediaFilter(medias, option)

        // stringify to prevent cache push malfunction
        this.cache.push(JSON.stringify(filteredData))

        return filteredData
    }
}