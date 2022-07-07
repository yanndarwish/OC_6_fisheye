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
                const carouselOpening = () => {
                    this.$overlay.setAttribute('data-visible', true)
                    this.$overlay.setAttribute('aria-hidden', false)
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
                    this.controlCarousel(contentIndex)
                }
                carouselOpening()
            })
            // handle enter press
            content.addEventListener("keyup", e => {
                if (e.keyCode === 13) {
                    e.preventDefault();
                    e.target.click(); //click() sends back to the click event listenner and execute the code above
                }
            })
        })
    }

    controlCarousel(index) {
        let counter = index

        const leftArrow = this.$wrapper.querySelector('.arrow-left')
        const rightArrow = this.$wrapper.querySelector('.arrow-right')

        rightArrow.addEventListener('click', () => {
            counter++
            if (counter === this._Medias.length) {
                counter = 0
            }
            const source = this._Medias[counter].image ? 
                `/assets/Sample_Photos/${this._photographer._name}/${this._Medias[counter].image}` 
                : `/assets/Sample_Photos/${this._photographer._name}/${this._Medias[counter].video}`
                
            this._Medias[counter].image ?
                this.$wrapper.querySelector('.carousel').innerHTML = `<img src=${source} alt="${this._Medias[counter].title}" class="carousel-img">`
                : this.$wrapper.querySelector('.carousel').innerHTML = `<video id="video" controls>
                <source src=${source} type="video/mp4" class="carousel-img">
            </video>`
        })

        leftArrow.addEventListener('click', () => {
            counter--
            if (counter < 0) {
                counter = this._Medias.length - 1
            }
            const source = this._Medias[counter].image ? 
                `/assets/Sample_Photos/${this._photographer._name}/${this._Medias[counter].image}` 
                : `/assets/Sample_Photos/${this._photographer._name}/${this._Medias[counter].video}`
                
            this._Medias[counter].image ?
                this.$wrapper.querySelector('.carousel').innerHTML = `<img src=${source} alt="${this._Medias[counter].title}" class="carousel-img">`
                : this.$wrapper.querySelector('.carousel').innerHTML = `<video id="video" controls>
                <source src=${source} type="video/mp4" class="carousel-img">
            </video>`
        })
    }

    closeCarousel() {
            this.$wrapper.querySelector('.carousel-close').addEventListener('click', () => {
            this.$overlay.setAttribute('data-visible', false);
            this.$overlay.setAttribute('aria-hidden', false)
            this.$wrapper.querySelector('.carousel-close').setAttribute('data-visible', false)
        })
    }

    createCarousel() {
        const carousel = `
        <button type="button" class="close-btn carousel-close" aria-label="Close">
            &times;
        </button>
        <button class="arrow-left flex center">
            <i class="fas fa-chevron-left">&lsaquo;</i>
        </button>
        <button class="arrow-right flex center">
            <i class="fas fa-chevron-right">&rsaquo;</i>
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