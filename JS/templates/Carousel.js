class Carousel {
    constructor(Medias) {
        this._Medias = Medias
        this.$overlay = document.querySelector('.carousel-overlay')
        this.$wrapper = document.createElement('div')
        this.$wrapper.classList.add('carousel-container')
        this.$wrapper.setAttribute('role', document)

    }

    openCarousel() {
        this.$wrapper.querySelector('.carousel').innerHTML = ''

        const triggers = document.querySelectorAll('.media-content')

        triggers.forEach(content => {
            content.addEventListener('click', () => {
                this.$overlay.setAttribute('data-visible', true)
                this.$wrapper.querySelector('.carousel')
                    .setAttribute('data-visible', true)
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