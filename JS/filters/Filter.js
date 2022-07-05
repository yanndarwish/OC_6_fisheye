class Filter {
    static filterByPopularity(Medias) {
        return Medias.sort((a, b) => b.likes - a.likes)
    }

    static filterByDate(Medias) {
        return Medias.sort((a, b) => {
            if (a.date < b.date) {
                return -1;
            }
            if (a.date > b.date) {
                return 1;
            }
            return 0;
        })
    }

    static filterByTitle(Medias) {
        return Medias.sort((a, b) => {
            if (a.title < b.title) {
                return -1;
            }
            if (a.title > b.title) {
                return 1;
            }
            return 0;
        })
    }
}