class App {
    constructor() {
        this.mainWrapper = document.querySelector('.main')
        this.dataApi = new DataApi('/data.json')
    }

    async main() {
        const data = await this.dataApi.getData()
        const photographers = data.photographers
        const media = data.media


        
    }
}

const app = new App()
app.main()