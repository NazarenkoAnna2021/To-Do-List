if (localStorage.getItem('tasks')) {
    valuesToDo = JSON.parse(localStorage.getItem('tasks'));
    writeLi();
}

dom.addButton.addEventListener('click', addElem);
dom.toDo.addEventListener('click', deleteElement);
