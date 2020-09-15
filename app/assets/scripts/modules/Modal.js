import $ from 'jquery';

class Modal {
    constructor() {
        this.openModalBtn = $(".open-modal");
        this.modal = $(".modal");
        this.closeModalBtn = $(".modal__close");
        this.event();
    }

    event() {
        //open modal
        this.openModalBtn.click(this.openModal.bind(this));
        //close modal
        this.closeModalBtn.click(this.closeModal.bind(this));
        //push esc key to close modal
        $(document).keyup(this.keyPresshandler.bind(this));
    }

    keyPresshandler(el) {
        if(el.keyCode == 27) {
            this.closeModal();
        }
    }

    openModal() {
        this.modal.addClass("modal--is-visible");
        return false;
    }

    closeModal() {
        this.modal.removeClass("modal--is-visible");
    }


}

export default Modal;