// function getElement (selection){
//   const element = document.querySelector(selection);
//   if(element){
//     return element;
//   }else{
//     throw error('you did not select element')
//   }

// }
// otra opción
export default function (selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  } else {
    throw error('you did not select element');
  }
}
