import $ from 'jquery';

class Modal {
  constructor(){
    this.openModalButton = $(".open-modal");
    this.modal = $(".modal");
    // this.dataModal = $(".open-modal")
    this.closeModalButton = $(".modal__close");
    this.events();
  }

  events() {
    //clicing the open modal button.
    this.openModalButton.click(this.openModal.bind(this));
    // this.openModalButton.click(function(){
    //   var id = $(this).attr('id');
    //   console.log(id);
    // })
  
    console.log(this.openModalButton);

    //clicking the x close modal openModalButton
    this.closeModalButton.click(this.closeModal.bind(this));

    //pushes any key.
    $(document).keyup(this.keyPressHandler.bind(this));
  }

  keyPressHandler(e){
    if(e.keyCode == 27){
      this.closeModal();
    }
  }

  openModal(){
    this.modal.addClass("modal--is-visible");
    return false;
    //prevent from default behavior of scrolling up

  }

  closeModal(){
    this.modal.removeClass("modal--is-visible");

  }
}

export default Modal;