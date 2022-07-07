class Filter {
    static mediaFilter(Medias, option) {

        if (option === 'popular') {
            return {
                key: option,
                data: Medias.sort((a, b) => b.likes - a.likes)
            }
        } else if (option === 'date') {
            return {
                key: option,
                data: Medias.sort((a, b) => {
                    if (a.date < b.date) {
                        return -1;
                    }
                    if (a.date > b.date) {
                        return 1;
                    }
                    return 0;
                })
            }
        } else if (option === 'title') {
            return {
                key: option,
                data: Medias.sort((a, b) => {
                    if (a.title < b.title) {
                        return -1;
                    }
                    if (a.title > b.title) {
                        return 1;
                    }
                    return 0;
                })
            }
        } else {
            return {
                key: 'unsorted', 
                data: Medias
            }
        }
    }
}