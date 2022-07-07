class ModalForm {
    constructor(photographer) {
        this._photographer = photographer
        this.$openBtn = document.querySelector('.contact-modal-toggle')
        this.$overlay = document.querySelector('.modal')
        this.$dialogWrapper = document.querySelector('.modal-dialog')
    }

    onSubmitForm() {
        this.$dialogWrapper.querySelector('form')
            .addEventListener('submit', e => {
                e.preventDefault()

                const firstNameValue = this.$dialogWrapper.querySelector('#first').value
                const lastNameValue = this.$dialogWrapper.querySelector('#last').value
                const mailValue = this.$dialogWrapper.querySelector('#mail').value
                const messageValue = this.$dialogWrapper.querySelector('#message').value

                const request = {
                    firstName : firstNameValue,
                    lastName : lastNameValue,
                    mail : mailValue,
                    message : messageValue
                }

                console.log(request)
            })
    }

    closeModal() {
        this.$dialogWrapper.querySelectorAll('[data-toggle="contact-modal"]')
            .forEach(btn => {
                btn.addEventListener('click', () => {
                    this.$openBtn.setAttribute('aria-expanded', false)
                    this.$overlay.setAttribute('data-visible', false)
                    this.$overlay.setAttribute('aria-hidden', true)
                    this.$dialogWrapper.setAttribute('data-visible', false)
                })
            })
    }

    openModal() {
        this.$openBtn.addEventListener('click', () => {
            const focusableElements =
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
            const firstFocusableElement = this.$dialogWrapper.querySelectorAll(focusableElements)[0]; // get first element to be focused inside modal
            const focusableContent = this.$dialogWrapper.querySelectorAll(focusableElements);
            const lastFocusableElement = focusableContent[focusableContent.length - 1]; // get last element to be focused inside modal

            this.$openBtn.setAttribute('aria-expanded', true)
            this.$overlay.setAttribute('data-visible', true)
            this.$overlay.setAttribute('aria-hidden', false)
            this.$dialogWrapper.setAttribute('data-visible', true)

            // keep focus in modal
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
        })
    }

    createModalContent(photographer) {
        const modalContent = `
        <div>
            <div class="modal-header">
                <h5>Contactez-moi <span class="modal-header-name">${photographer._name}</span></h5>
                <button type="button" class="close-btn contact-modal-close" data-toggle="contact-modal" aria-label="Close">
                    <span aria-hidden="true" data-toggle="contact-modal">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                    <form class="contact-form grid" action="#" method="POST">
                        <div>
                            <label for="first" class="contact-label">Prénom</label>
                            <input type="text" id="first" class="contact-input">
                        </div>
                        <div>
                            <label for="last" class="contact-label">Nom</label>
                            <input type="text" id="last"class="contact-input">
                        </div>
                        <div>
                            <label for="mail" class="contact-label">Email</label>
                            <input type="text" id="mail"class="contact-input">
                        </div>
                        <div>
                            <label for="message" class="contact-label">Votre message</label>
                            <textarea id="message" class="contact-input" cols="30" rows="3"></textarea>
                        </div>
                        <div class="modal-footer flex">
                            <button type="submit" class="btn" data-toggle="contact-modal">Envoyer</button>
                        </div>
                    </form>
            </div>
        </div>
        `
        this.$dialogWrapper.innerHTML = modalContent
    }
    render() {
        this.createModalContent(this._photographer)
        this.onSubmitForm()
        this.openModal()
        this.closeModal()
    }
}