import { dom } from './dom'

export let valuesToDo = [];
export let createId = [0];

export function initList(){
    if (localStorage.getItem('tasks') && localStorage.getItem('id')) {
    valuesToDo = JSON.parse(localStorage.getItem('tasks'));
    createId = JSON.parse(localStorage.getItem('id'))
    writeLi();
}
}

export function addElem() {
    const newid = createID();
    createId.push(newid)
    valuesToDo.push({
        id: newid,
        title: dom.newLi.value,
        completed: false
    });
    const html = dom.taskItemTemplate
        .replace("{{title}}", dom.newLi.value)
        .replace("{{itemid}}", 'item'.concat(newid))
        .replace("{{valid}}", "val".concat(newid));

    const newTaskEl = htmlToElement(html);
    dom.toDo.appendChild(newTaskEl);

    localStorage.setItem('tasks', JSON.stringify(valuesToDo));
    localStorage.setItem('id', JSON.stringify(createId));
}

export function createID() {
    const temp = Math.floor(Math.random() * (1000 - 1));
    if (createId.includes(temp)) createID();
    return temp;
}

export function writeLi() {
    dom.toDo.innerHTML = '';
    valuesToDo.forEach((val) => {    
        const html = dom.taskItemTemplate
        .replace("{{title}}", val.title)
        .replace("{{itemid}}", `item${val.id}`)
        .replace("{{valid}}", `val${val.id}`)
        .replace("{{}}", val.completed ? "checked" : '');

    const newTaskEl = htmlToElement(html);
    dom.toDo.appendChild(newTaskEl);

    })
}

export function deleteElement(event) {
    if (event.target && event.target.nodeName == "BUTTON") {
        let idInput = event.target.getAttribute('id');
        console.log(idInput)
        valuesToDo.forEach((value, index) => {
            if (String('val' + value.id) === String(idInput)) {
                valuesToDo.splice(index, 1);
                createId = createId.filter((val) => val != value.id);
            }
        })
        console.log(createId)
        event.target.parentNode.remove();
        localStorage.setItem('tasks', JSON.stringify(valuesToDo));
        localStorage.setItem('id', JSON.stringify(createId));
    }
}

export function checkTask(event) {
    let idInput = event.target.getAttribute('id');
    console.log(idInput);
    valuesToDo.forEach((val) => {
        if ("item" + val.id === idInput) {
            val.completed = !val.completed;
            localStorage.setItem('tasks', JSON.stringify(valuesToDo));
        }
    })
}

function htmlToElement(html) {
    const template = document.createElement("template");
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
}

