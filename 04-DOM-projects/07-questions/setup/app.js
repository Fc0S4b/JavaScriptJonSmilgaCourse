//using selectors inside the element
// traversing the dom //up and down in the three

// traversing the dom
// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(function (btn) {
//   btn.addEventListener('click', function (e) {
//     // console.log(e.currentTarget.parentElement.parentElement); //article con class question
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle('show-text');
//   });
// });

// using selectors inside the element

const questions = document.querySelectorAll('.question');

questions.forEach(function (question) {
  // console.log(question); //tenemos todos los article
  const btn = question.querySelector('.question-btn');
  // console.log(btn); //button.question-btn
  btn.addEventListener('click', function () {
    questions.forEach(function (item) {
      // console.log(item); //nos muestra los 3 artículo y sus clases lo que revela cual de los 3 tiene show-text
      if (item !== question) {
        //comparamos ambos parámetros de cada forEach, si no coincide, se remueve la clase show-text, (si se clickea en otra question entonces la anterior question abeirta se cerrará)
        item.classList.remove('show-text');
      }
    });

    question.classList.toggle('show-text'); //al usar question que es el parámetro de forEach, se está haciendo referencia a cada artículo guardado en questions
  });
});
