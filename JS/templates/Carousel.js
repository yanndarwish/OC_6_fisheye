class Carousel {
    constructor(Medias, photographer) {
        this._Medias = Medias
        this._photographer = photographer

        this.$overlay = document.querySelector('.carousel-overlay')
        this.$overlay.innerHTML = ''

        this.$wrapper = document.createElement('div')
        this.$wrapper.classList.add('carousel-container')
        this.$wrapper.setAttribute('role', 'document')
        this.$wrapper.setAttribute('aria-label', 'image closeup view')
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
                        `<video id="video" controls  alt="${thisContent.title}">
                            <source src=${source} type="video/mp4" class="carousel-img">
                        </video>`
                    } 
                    this.controlCarousel(contentIndex)
                    this.focusInCarousel()
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

        const changeMedia = (action) => {
            if (action === 'INC') {
                counter++
                if (counter === this._Medias.length) {
                    counter = 0
                }
            } else if (action === 'DEC') {
                counter--
                if (counter < 0) {
                    counter = this._Medias.length - 1
            }
            }
            const source = this._Medias[counter].image ? 
                `/assets/Sample_Photos/${this._photographer._name}/${this._Medias[counter].image}` 
                : `/assets/Sample_Photos/${this._photographer._name}/${this._Medias[counter].video}`
                
            this._Medias[counter].image ?
                this.$wrapper.querySelector('.carousel').innerHTML = `<img src=${source} alt="${this._Medias[counter].title}" class="carousel-img">`
                : this.$wrapper.querySelector('.carousel').innerHTML = `<video id="video" controls>
                <source src=${source} type="video/mp4" class="carousel-img">
            </video>`
        }

        rightArrow.addEventListener('click', () => {
            changeMedia('INC')
        })
        document.addEventListener("keyup", e => {
                if (e.keyCode === 39) {
                    changeMedia('INC')
                }
            })
        leftArrow.addEventListener('click', () => {
            changeMedia('DEC')
        })
        document.addEventListener("keyup", e => {
            if (e.keyCode === 37) {
                changeMedia('DEC')
            }
        })
    }

    focusInCarousel() {
        const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
        const firstFocusableElement = this.$wrapper.querySelectorAll(focusableElements)[0]; // get first element to be focused inside carousel
        const focusableContent = this.$wrapper.querySelectorAll(focusableElements);
        const lastFocusableElement = focusableContent[focusableContent.length - 1]; // get last element to be focused inside carousel

        // keep focus in carousel
        document.addEventListener('keydown', function (e) {
            let isTabPressed = e.key === 'Tab' || e.keyCode === 9;

            if (!isTabPressed) {
                return;
            }

            if (e.shiftKey) { // if shift key pressed for shift + tab combination
                if (document.activeElement === firstFocusableElement) {
                    lastFocusableElement.focus(); // add focus for the last focusable element
                    e.preventDefault();
                }
            } else { // if tab key is pressed
                if (document.activeElement === lastFocusableElement) { // if focused has reached to last focusable element then focus first focusable element after pressing tab
                    firstFocusableElement.focus(); // add focus for the first focusable element
                    e.preventDefault();
                }
            }
        });
        firstFocusableElement.focus();
    }

    closeCarousel() {
            this.$wrapper.querySelector('.carousel-close').addEventListener('click', () => {
            this.$overlay.setAttribute('data-visible', false);
            this.$overlay.setAttribute('aria-hidden', false)
            this.$wrapper.querySelector('.carousel-close').setAttribute('data-visible', false)
        })
        // close on escape press
        document.addEventListener('keydown', (e) => {
            if (e.keyCode === 27) {
                this.$wrapper.querySelector('.carousel-close').click()
            }
        })

    }

    createCarousel() {
        const carousel = `
        <button type="button" class="close-btn carousel-close" aria-label="Close dialog">
            &times;
        </button>
        <button class="arrow-left flex center" aria-label='Previous image'>
            &lsaquo;
        </button>
        <button class="arrow-right flex center" aria-label='Next image'>
            &rsaquo;
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