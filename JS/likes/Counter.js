class LikeCounter {

    static like(action, wrapper) {
        let likeNumber = wrapper.querySelector('.media-card-like-number')
        let totalLikeNumber = document.querySelector('.popup-like-counter')

        if (action === 'INC') {
            likeNumber.innerHTML = parseInt(likeNumber.innerHTML) + 1
            totalLikeNumber.innerHTML = parseInt(totalLikeNumber.innerHTML) + 1
        } else if (action === 'DEC') {
            likeNumber.innerHTML = parseInt(likeNumber.innerHTML) - 1
            totalLikeNumber.innerHTML = parseInt(totalLikeNumber.innerHTML) - 1
        } else {
            throw 'Unknown action'
        }
    }
}