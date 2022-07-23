const deleteIcon = () => {

    const i = document.createElement('i')
    i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon')
    i.addEventListener('click', deleteTask);
    return i

}
const deleteTask = (event) => {
    console.log('eliminado');
    console.log(event.target.parentElement);
    const parent = event.target.parentElement;
    parent.remove();

}
export default deleteIcon;