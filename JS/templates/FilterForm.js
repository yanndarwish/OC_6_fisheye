class FilterForm {
    constructor(Medias, photographer) {
        this._Medias = Medias
        this._photographer = photographer

        this.wrapper = document.createElement('div')
        this.filterWrapper = document.querySelector('.filter-wrapper')
        this.mediaSection = document.querySelector('.media-section')
    }

    async filterMedias(option) {
        this.clearMediaSection()

        let filteredMedias = []

        switch (option) {
            case 'popular':
                filteredMedias = await Filter.filterByPopularity(this._Medias)
                break
            case 'date':
                filteredMedias = await Filter.filterByDate(this._Medias)
                break
            case 'title':
                filteredMedias = await Filter.filterByTitle(this._Medias)
                break
        }

        filteredMedias
            .map(media => new Media(media, this._photographer))
            .forEach(media => {
                const Template = new MediaCard(media)
                this.mediaSection.appendChild(Template.createMediaCard())
            })
    }

    onChangeFilter() {
        this.wrapper
            .querySelector('form')
            .addEventListener('change', e => {
                const option = e.target.value
                
                this.filterMedias(option)
            })
    }

    clearMediaSection() {
        this.mediaSection.innerHTML = ""
    }

    render() {
        const filterForm = `
        <form class="sorting flex" action="#" method="POST">
            <label class="sorting-label" for="standard-select">Trier par</label>
            <div class="select btn flex">
                <select id="standard-select" name="filter-select" id="filter-select">
                    <option value="date">Date</option>
                    <option value="popular">Popularité</option>
                    <option value="title">Titre</option>
                </select>
                <svg class="arrow" width="16" height="11" viewBox="0 0 16 11" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1.88 10.5466L8 4.43996L14.12 10.5466L16 8.66663L8 0.66663L1.64355e-07 8.66663L1.88 10.5466Z"
                        fill="white" />
                </svg>
            </div>
        </form>
        `

        this.wrapper.innerHTML = filterForm
        this.onChangeFilter()

        this.filterWrapper.appendChild(this.wrapper)
    }
}