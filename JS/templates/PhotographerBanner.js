class PhotographerBanner {
    constructor(photographer) {
        this._photographer = photographer
    }
    createPhotographerBanner() {
        const priceElement = document.querySelector('.price');

        document.querySelector('.profile-name').innerHTML = this._photographer.name.replaceAll('_', ' ');
        document.querySelector('.city').innerHTML = this._photographer.city;
        document.querySelector('.country').innerHTML = this._photographer.country;
        document.querySelector('.profile-description').innerHTML = this._photographer.tagline;
        document.querySelector('.profile-pic').src = this._photographer.portrait;
        document.querySelector('.profile-pic').setAttribute('alt', this._photographer.name)

        priceElement.innerHTML = this._photographer.price
    }
}