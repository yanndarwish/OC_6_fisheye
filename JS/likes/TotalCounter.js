class TotalCounter {
    constructor(totalLikes) {
        this._totalLikes = totalLikes
        this._$wrapper = document.querySelector('.popup-like-counter')
    }

    render() {
        this._$wrapper.innerHTML = this._totalLikes
    }
}