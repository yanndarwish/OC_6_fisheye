class App {
    constructor() {
        this.mainWrapper = document.querySelector('.main')
        this.mediaSection = document.querySelector('.media-section')
        this.dataApi = new DataApi('/data.json')
    }

    async main() {
        const data = await this.dataApi.getData()
        const photographersData = data.photographers
        const mediaData = data.media

        // if home page
        if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
            photographersData
                // We create an instance of our photographer model 
                // for each photographer
                .map(photographer => new Photographer(photographer))
                // now for each model created, we instanciate and render a card
                .forEach(photographer => {
                    const Template = new PhotographerCard(photographer)
                    this.mainWrapper.appendChild(
                        Template.createPhotographerCard()
                    )
                })
        } else {
            // get photographer id from local storage
            const id = parseInt(localStorage.getItem('id'))
            // filter method returns an array of objects
            const photographerArray = photographersData.filter(photographer => photographer.id === id)
            // but we need to send an object to our constructor
            // our photographer object is photographerArray[0]
            // so we create a new instance of Photographer with it
            const photographer = new Photographer(photographerArray[0])
            // we create the banner instance
            const Template = new PhotographerBanner(photographer)
            // we apply the method to render in DOM
            Template.createPhotographerBanner()

            // get the media of the photograph
            const mediasArray = mediaData.filter(media => media.photographerId === id)

            mediasArray
            // create an instance of Media model for each media of the array
                .map(media => new Media(media, photographer))
                // now for each model created, we instanciate and render a card
                .forEach(media => {
                    const Template = new MediaCard(media)
                    this.mediaSection.appendChild(
                        Template.createMediaCard()
                    )
                })

            // render filter form
            const Filter = new FilterForm(mediasArray, photographer)
            Filter.render()
        }  
    }
}

const app = new App()
app.main()