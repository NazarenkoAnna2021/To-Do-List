import { dom } from './dom'
import Model from './model'
import { constants } from "./constants"

export default class Controller {
    constructor(){
        this.model = new Model();
        this.addElem = this.addElem.bind(this);
        this.deleteElement = this.deleteElement.bind(this);
        this.checkTask = this.checkTask.bind(this); 
    }
    addElem() {
        const newid = this.model.generateId(this.model.createId);
        this.model.setData(dom.newLi.value, newid);
        const newTaskEl = this.model.writeTask(dom.newLi.value, newid, '');
        dom.toDo.appendChild(newTaskEl);
    }
    deleteElement(event) {
        if (event.target && event.target.nodeName == "BUTTON") {
            let idInput = event.target.getAttribute('id');
            this.model.valuesToDo.forEach((value, index) => {
                this.model.deleteData(`val${value.id}`, idInput, index, value);
            });
            event.target.parentNode.parentNode.remove();
        }
    }
    checkTask(event) {
        let idInput = event.target.getAttribute('id');
        this.model.reversCheck(idInput);
    }
}