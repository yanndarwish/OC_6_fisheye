class TotalCounter {
    constructor(totalLikes) {
        this._totalLikes = totalLikes
        this._$wrapper = document.querySelector('.popup-like-counter')
    }

    update(action) {
        if (action === 'INC') {
            this._totalLikes += 1
        } else if (action === 'DEC') {
            this._totalLikes -= 1
        } else {
            throw 'Unknown action'
        }
        this._$wrapper.innerHTML = this._totalLikes
    }

    render() {
        this._$wrapper.innerHTML = this._totalLikes
    }
}