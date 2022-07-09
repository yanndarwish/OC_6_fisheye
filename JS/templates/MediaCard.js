class MediaCard {
    constructor(media, likeSubject) {
        this._media = media
        this._likeSubject = likeSubject

        this._$wrapper = document.createElement('article')
        this._$wrapper.classList.add('media-card')
    }

    handleLikeButton() {
        const that = this
        const wrapper = this._$wrapper.querySelector('.media-card-heart')
        const likeNumberWrapper = this._$wrapper.querySelector('.media-card-like-number')

        const media = this._media 

        wrapper.addEventListener('click', function() {
            if (this.classList.contains('liked')) {
                this.classList.remove('liked')
                media.like = 'DEC'
                that._likeSubject.fire('DEC')
            } else {
                this.classList.add('liked')
                media.like = 'INC'
                that._likeSubject.fire('INC')
            }
            likeNumberWrapper.innerHTML = media._likes
        })
    }
    createMediaCard() {
        this._$wrapper.setAttribute('data-key', this._media.id)

        const source = this._media._image ? `<img class="media-content" src="${this._media.source}" alt="${this._media.title}, closeup view" data-key="${this._media.id}" tabindex="0" width="350" height="300">`
        : `<video class="media-content" data-key="${this._media.id}" tabindex="0" width="350" height="300">
                <source src="${this._media.source}" type="video/mp4" alt="${this._media.title}">
            </video>
        `
        const mediaCard = `
            <div class="media-img-container">
                ${source}
            </div>
            <div class="media-card-footer flex">
                <h4 class="media-card-name">${this._media.title}</h4>
                <div class="media-card-like flex">
                    <p class="media-card-like-number">${this._media.likes}</p>
                    <div class="media-card-heart" data-key="${this._media.id}">
                        <svg class="likes" aria-label="likes" data-key="${this._media.id}"  width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path data-key="${this._media.id}" d="M9.5 18.35L8.23125 17.03C3.725 12.36 0.75 9.28 0.75 5.5C0.75 2.42 2.8675 0 5.5625 0C7.085 0 8.54625 0.81 9.5 2.09C10.4537 0.81 11.915 0 13.4375 0C16.1325 0 18.25 2.42 18.25 5.5C18.25 9.28 15.275 12.36 10.7688 17.04L9.5 18.35Z" fill="#911C1C"/>
                        </svg>                                
                    </div>
                </div>
            </div>
        ` 

        this._$wrapper.innerHTML = mediaCard
        this.handleLikeButton()

        return this._$wrapper
    }
}
