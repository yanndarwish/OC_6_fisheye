class Carousel {
    constructor(Medias, photographer) {
        this._Medias = Medias
        this._photographer = photographer
        this.$overlay = document.querySelector('.carousel-overlay')
        this.$overlay.innerHTML = ''
        this.$wrapper = document.createElement('div')
        this.$wrapper.classList.add('carousel-container')
        this.$wrapper.setAttribute('role', document)

    }

    openCarousel() {
        this.$wrapper.querySelector('.carousel').innerHTML = ''

        const triggers = document.querySelectorAll('.media-content')
        triggers.forEach(content => {
            content.addEventListener('click', e => {
                this.$overlay.setAttribute('data-visible', true)
                this.$wrapper.querySelector('.carousel')
                    .setAttribute('data-visible', true)

                const contentId = parseInt(e.target.getAttribute('data-key'))
                const contentIndex = this._Medias.findIndex(elt => elt.id === contentId)
                const thisContent = this._Medias[contentIndex]

                const source = thisContent.image ? 
                `/assets/Sample_Photos/${this._photographer._name}/${thisContent.image}` 
                : `/assets/Sample_Photos/${this._photographer._name}/${thisContent.video}`

                if (thisContent.image) {
                    this.$wrapper.querySelector('.carousel').innerHTML = `<img src=${source} alt="${thisContent.title}" class="carousel-img">`
                } else {
                    this.$wrapper.querySelector('.carousel').innerHTML =
                    `<video id="video" controls>
                        <source src=${source} type="video/mp4" class="carousel-img">
                    </video>`
                } 
            })
        })
    }

    closeCarousel() {
            this.$wrapper.querySelector('.carousel-close').addEventListener('click', () => {
            this.$overlay.setAttribute('data-visible', false);
            this.$wrapper.querySelector('.carousel-close').setAttribute('data-visible', false)
        })
    }

    createCarousel() {
        const carousel = `
        <button type="button" class="close-btn carousel-close" aria-label="Close">
            <span aria-hidden="true" data-toggle="contact-carousel">&times;</span>
        </button>
        <button>
            <span class="fas fa-chevron-left arrow-left flex center">&lsaquo;</span>
        </button>
        <button>
            <span class="fas fa-chevron-right arrow-right flex center">&rsaquo;</span>
        </button>
        <div class="carousel flex">
            
        </div>
        `

        this.$wrapper.innerHTML = carousel
        this.$overlay.appendChild(this.$wrapper)
    }

    render() {
        this.createCarousel()
        this.openCarousel()
        this.closeCarousel()
    }
}