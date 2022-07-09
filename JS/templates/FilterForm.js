/*global ProxyFilter, LikeSubject, Media, MediaCard, TotalCounter, Carousel*/
class FilterForm {
    constructor(Medias, photographer) {
        this._Medias = Medias
        this._photographer = photographer

        this.wrapper = document.createElement('div')
        this.filterWrapper = document.querySelector('.filter-wrapper')
        this.mediaSection = document.querySelector('.media-section')

        this.ProxyFilter = new ProxyFilter()
    }

    async filterMedias(option) {
        this.clearMediaSection()

        const likeSubject = new LikeSubject()

        const filteredData = await this.ProxyFilter.sorter(this._Medias, option)
        // const filteredData = Filter.mediaFilter(this._Medias, option)

        const filteredMedias = filteredData.data

        let likeSum = 0

        filteredMedias
            .map(media => new Media(media, this._photographer))
            .forEach(media => {
                likeSum += media._likes
                const Template = new MediaCard(media, likeSubject)
                this.mediaSection.appendChild(Template.createMediaCard())
            })
        
            // render total likes
        const TotalLikeSum = new TotalCounter(likeSum)
        TotalLikeSum.render()
        likeSubject.subscribe(TotalLikeSum)

        // render carousel
        const MyCarousel = new Carousel(filteredMedias, this._photographer)
        MyCarousel.render()
        
    }

    applyFilter() {
        this.filterMedias()
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
                <select id="standard-select" name="filter-select" aria-label="Order By">
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
        this.applyFilter()

        this.filterWrapper.appendChild(this.wrapper)
    }
}