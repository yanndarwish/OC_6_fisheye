class PhotographerCard {
    constructor(photographer) {
        this._photographer = photographer
    }

    createPhotographerCard() {
        const wrapper = document.createElement('article')
        wrapper.classList.add('card')

        const photographerCard = `
            <a href="/pages/profile.html" key="${this._photographer.id}" class="link" aria-label="Go to ${this._photographer.name}'s profile">
                <div class="profile-card-header flex column" key="${this._photographer.id}">
                    <div class="img-container profile-pic-container flex center">
                        <img class="profile-pic" src="${this._photographer.portrait}" alt="${this._photographer.name}" key="${this._photographer.id}" width="200" height="200">
                    </div>
                    <h2 class="profile-name" key="${this._photographer.id}">${this._photographer.name.replaceAll('_', ' ')}</h2>
                </div>
            </a>
            <div class="profile-infos flex column">
                <h3 class="profile-location">${this._photographer.city}, ${this._photographer.country}</h3>
                <p class="profile-description" >${this._photographer.tagline}</p>
                <p class="profile-price" ><span class="price">${this._photographer.price}</span>€/jour</p>
            </div>
        `

        wrapper.innerHTML = photographerCard
        
        // send photographer id to local storage
        wrapper.addEventListener('click', (e) => {
            const id = e.target.getAttribute('key');
            localStorage.setItem('id', id);
        })
        return wrapper
    }
}