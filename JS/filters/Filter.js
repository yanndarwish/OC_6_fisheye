class Filter {
    static filter(Medias, option) {
        switch (option) {
            case 'popular':
                let popular = {
                    key: 'popular',
                    data: Medias.sort((a, b) => b.likes - a.likes)
                }
                return popular
                break
            case 'date':
                let date = {
                    key: 'date',
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
                return date
                break
            case 'title':
                const title = {
                    key: 'title',
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
                return title
                break
        }
    }
}