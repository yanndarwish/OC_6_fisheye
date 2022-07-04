class App {
    constructor() {
        this.mainWrapper = document.querySelector('.main')
        this.dataApi = new DataApi('/data.json')
    }

    async main() {
        const data = await this.dataApi.getData()
        const photographersData = data.photographers
        const mediaData = data.media

        if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
            console.log(photographersData)
            photographersData
                .map(photographer => {
                    const Template = new PhotographerCard(photographer)
                    this.mainWrapper.appendChild(
                        Template.createPhotographerCard()
                    )
                })
        }
    }
}

const app = new App()
app.main()