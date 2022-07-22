const btn=document.querySelector('[data-form-btn]');

//Funcion anonima
const createTask=(evento) => {
 evento.preventDefault();
 const input=document.querySelector('[data-form-input]');
 console.log(input.value);
};
console.log(btn);
// Arrow functionsofunciones anonimas
btn.addEventListener('click',createTask);