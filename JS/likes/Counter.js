class LikeCounter {
    constructor() {
    }

    update(action, wrapper) {
        let likeNumber = wrapper.querySelector('.media-card-like-number')
        console.log(likeNumber)
        if (action === 'INC') {
            likeNumber.innerHTML = parseInt(likeNumber.innerHTML) + 1
        } else if (action === 'DEC') {
            likeNumber.innerHTML = parseInt(likeNumber.innerHTML) - 1
        } else {
            throw 'Unknown action'
        }

    }
}