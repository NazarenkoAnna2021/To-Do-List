import { dom } from './dom'
import Model from './model'
import { constants } from "./constants"

export default class View {
    writeLi() {
        const model = new Model();
        dom.toDo.innerHTML = constants.none;
        model.valuesToDo.forEach((value) => {
            const newTaskEl = model.writeTask(value.title, value.id, value.completed ? constants.checked : constants.none);
            dom.toDo.appendChild(newTaskEl);
        });
    }
}