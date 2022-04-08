function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  );
}

function Gallery(element) {
  this.container = element; //section nature or section city
  this.list = [...element.querySelectorAll('.img')];
  // target busco en el document no con element por eso se usa getElement
  this.modal = getElement('.modal');
  this.modalImg = getElement('.modal-img');
  this.modalImages = getElement('.modal-images');
  this.closeBtn = getElement('.close-btn');
  this.nextBtn = getElement('.next-btn');
  this.prevBtn = getElement('.prev-btn');
  // self reference
  // let self = this;
  // bind functions
  // this.openModal = this.openModal.bind(this);
  // container event
  this.container.addEventListener(
    'click',
    function (e) {
      // console.log(this); //no apunta a openModal, apunta a container (la sección en donde haces click), pero con bind si apuntará a gallery
      this.openModal();
    }.bind(this) // una forma de apuntar a la galería es colocar al cierre de la función ".bind(this)" otra alternativa es igual una variable a this que está fuera de la función pero dentro de gallery y luego usarla dentro de la función entonces this.openModal() pasaría a ser self.openModal()
  );
}

Gallery.prototype.openModal = function () {
  console.log(this); //indica la sección nature si haces click en alguna foto de nature si es que no tiene la función bind, si la tiene entonces indicará el objeto de Gallery que es el que se desea apuntar
  // console.log('open modal');
  this.modal.classList.add('open');
};

const nature = new Gallery(getElement('.nature'));
const city = new Gallery(getElement('.city'));
