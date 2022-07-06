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
        }
        // console.log(filteredData)
        // switch (option) {
        //     case 'popular':
        //         console.log(option)
        //         let popularFiltered = {
        //             key: 'popular',
        //             data: Medias.sort((a, b) => b.likes - a.likes)
        //         }
        //         console.log(popularFiltered)
        //         return popularFiltered
        //         // break
        //     case 'date':
        //         console.log(option)
        //         let dateFiltered = {
        //             key: 'date',
        //             data: Medias.sort((a, b) => {
        //                 if (a.date < b.date) {
        //                     return -1;
        //                 }
        //                 if (a.date > b.date) {
        //                     return 1;
        //                 }
        //                 return 0;
        //             })
        //         }
        //         console.log(dateFiltered)
        //         return dateFiltered
        //         // break
        //     case 'title':
        //         console.log(option)
        //         const titleFiltered = {
        //             key: 'title',
        //             data: Medias.sort((a, b) => {
        //                 if (a.title < b.title) {
        //                     return -1;
        //                 }
        //                 if (a.title > b.title) {
        //                     return 1;
        //                 }
        //                 return 0;
        //             })
        //         }
        //         console.log(titleFiltered)
        //         return titleFiltered
        //         // break
        // }
    }
}