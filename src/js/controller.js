import { dom } from './dom'
import Model from './model'
import { constants } from "./constants"

export default class Controller {
    addElem() {
        const model = new Model();
        const newid = model.generateId(model.createId);
        model.setData(dom.newLi.value, newid);
        const newTaskEl = model.writeTask(dom.newLi.value, newid, '');
        dom.toDo.appendChild(newTaskEl);
    }
    deleteElement(event) {
        if (event.target && event.target.nodeName == "BUTTON") {
            let idInput = event.target.getAttribute('id');
            const model = new Model();
            model.valuesToDo.forEach((value, index) => {
                model.deleteData(`val${value.id}`, idInput, index, value);
            });
            event.target.parentNode.remove();
        }
    }
    checkTask(event) {
        let idInput = event.target.getAttribute('id');
        const model = new Model();
        model.reversCheck(idInput);
    }
}