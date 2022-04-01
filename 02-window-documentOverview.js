// window object = browser api (opciones que nos da el navegador para trabajar con el)
// document
// console.dir

// window.alert('hello') originalmente alert es un método de windo, entonces se deberá acceder a alert así
// alert('hello') sin embargo esta forma igual es válida ya que javascript al no encontrar de donde viene el método, siempre buscará en window
// esta es la misma razón de porque se usa document ya que doocument es un método de window (window.document) con la excepción de que si estamos trabajando en un html, el document se referenciará con respecto a ese html y no a window, así se podrá acceder al body (document.body), estilos (document.styles), etc

// al hacer console.log(document) no se mostrará nada pero si se quiere ver los nodos de document, se escribe console.dir(document)
