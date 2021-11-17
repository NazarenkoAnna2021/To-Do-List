function addElem() {
    var newElement = document.createElement('LI');
    dom.toDo.appendChild(newElement);
    newElement.innerHTML = `${dom.newLi.value}<button class='delButton'>X</button>`;
    valuesToDo.push({
        userId: valuesToDo.length,
        id: valuesToDo.length,
        title: dom.newLi.value,
        completed: false
    });
    localStorage.setItem('tasks', JSON.stringify(valuesToDo));
}
function writeLi() {
    valuesToDo.forEach((val) => {
    var newElement = document.createElement('LI');
    dom.toDo.appendChild(newElement);
    newElement.innerHTML = `${val.title}<button class='delButton'>X</button>`;
    })
}


function deleteElement(e) {
    if (e.target && e.target.nodeName == "BUTTON") {
        console.log("Button ", e, " was clicked!");
        const deleted = String(e.target.parentNode.textContent);
        console.log(deleted)
        for (let index in valuesToDo)
            if (valuesToDo[index].title + 'X' === deleted){
                valuesToDo.splice(index, 1);
            break;
            }
        e.target.parentNode.remove();
        localStorage.setItem('tasks', JSON.stringify(valuesToDo));
    }
}