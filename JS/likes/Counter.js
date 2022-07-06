class LikeCounter {

    static like(action, wrapper) {
        let likeNumber = wrapper.querySelector('.media-card-like-number')
        if (action === 'INC') {
            likeNumber.innerHTML = parseInt(likeNumber.innerHTML) + 1
        } else if (action === 'DEC') {
            likeNumber.innerHTML = parseInt(likeNumber.innerHTML) - 1
        } else {
            throw 'Unknown action'
        }
    }
}