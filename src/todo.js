if (localStorage.getItem('tasks') && localStorage.getItem('id')) {
    valuesToDo = JSON.parse(localStorage.getItem('tasks'));
    createdid = JSON.parse(localStorage.getItem('id'))
    writeLi();
}

dom.addButton.addEventListener('click', addElem);
dom.toDo.addEventListener('click', deleteElement);
dom.toDo.addEventListener('change', checkTask)