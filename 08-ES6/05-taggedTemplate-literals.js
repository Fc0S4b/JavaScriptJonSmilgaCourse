// `` backticks above tab key left of 1 key
// tagged template literals
// en html
{
  // body{
  //   text-transform: capitalize;
  // }
  // .blue{
  //   color: blue;
  // }
  /* <h1>Info</h1>
<div id="result"></div> */
}

const author = 'Some Author';
const statement = 'Some Statement';

const quote = highlight`Here is the ${statement} by ${author} and it could not be more true`;
console.log(quote); //se ve que se guarda el texto en text y las variables statement en arg1 y author en arg2, todo se muestra como un objeto y luego el mensaje 'hello there', ahora si se tiene muchas variables se puede usar el operador rest ... y un nombre cualquiera ...vars

const result = document.getElementById('result');
result.innerHTML = quote;

function highlight(text, ...vars) {
  // console.log({ text, vars });
  // return 'hello there';
  const awesomeText = text.map((item, index) => {
    return `${item} <strong class="blue">${vars[index] || ''}</strong>`; //el texto tiene 3 frases y son variables, el || "" se agrega para que no itere en el último texto para una tercera variable que no existe (se mostraría un undefined)
  });
  return awesomeText.join(''); //se verá la frase con las variables en negritas
}
