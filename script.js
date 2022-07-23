const btn = document.querySelector('[data-form-btn]');
import deleteIcon from './assets/componets/deleteIcon.js'
import checkComplete from './assets/componets/checkComplete.js'
const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    const value = input.value;
    const list = document.querySelector('[data-list]');
    const task = document.createElement('li');
    task.classList.add('card');
    input.value = '';
    //backticks
    const taskContent = document.createElement('div');

    const titleTask = document.createElement('span');
    titleTask.classList.add('task');
    titleTask.innerText = value;
    taskContent.appendChild(checkComplete());

    taskContent.appendChild(titleTask);

    // task.innerHTML = content;

    task.appendChild(taskContent);
    task.appendChild(deleteIcon());
    list.appendChild(task);
    console.log(task)
};

//Arrow functions o funciones anonimas
btn.addEventListener('click', createTask);
