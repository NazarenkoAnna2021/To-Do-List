function addElem() {
    const newid = createID();
    createdid.push(newid)
    console.log(createdid)
    valuesToDo.push({
        id: newid,
        title: dom.newLi.value,
        completed: false
    });
    var newElement = document.createElement('LI');
    dom.toDo.appendChild(newElement);
    newElement.innerHTML = `
        <input type="checkbox" id="item${newid}" class="check">
    <label for="item${newid}">${dom.newLi.value}</label>
        <button id="val${newid}" class='delButton'>X</button>
    `;
    localStorage.setItem('tasks', JSON.stringify(valuesToDo));
    localStorage.setItem('id', JSON.stringify(createdid));
}

function createID() {
    const temp = Math.floor(Math.random() * (1000 - 1));
    if(createdid.includes(temp))createID();
    return temp;
}

function writeLi() {
    dom.toDo.innerHTML = '';
    valuesToDo.forEach((val) => {
        var newElement = document.createElement('LI');
        dom.toDo.appendChild(newElement);
        newElement.innerHTML = `
           <input id="item${val.id}"type="checkbox" class="check" ${val.completed ? "checked" : ''}>
        <label for="item${val.id}">${val.title}</label>
           <button id="val${val.id}" class='delButton'>X</button>
        `;

    })
}

function deleteElement(event) {
    if(event.target && event.target.nodeName == "BUTTON") {
        let idInput = event.target.getAttribute('id');
        console.log(idInput)
        valuesToDo.forEach((value, index) => {
            if(String('val' + value.id) === String(idInput)){
            valuesToDo.splice(index, 1);
            createdid = createdid.filter((val) => val != value.id);
        }
        })
        console.log(createdid)
    event.target.parentNode.remove();
    localStorage.setItem('tasks', JSON.stringify(valuesToDo));
    localStorage.setItem('id', JSON.stringify(createdid));
    }
}

function checkTask(event) {
    let idInput = event.target.getAttribute('id');
    console.log(idInput);
    valuesToDo.forEach((val) => {
        if ("item" + val.id === idInput) {
            val.completed = !val.completed;
            localStorage.setItem('tasks', JSON.stringify(valuesToDo));
        }
    })
}