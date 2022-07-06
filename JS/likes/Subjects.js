class LikeSubjects {
    constructor() {
        this._observers = []
    }

    subscribe(observer) {
        this._observers.push(observer)
        console.log(this._observers)
    }

    unsubscribe(observer) {
        this._observers = this._observers.filter(obs => obs !== observer)
    }

    fire(action, wrapper) {
        this._observers.forEach(observer => observer.update(action, wrapper))
    }
}