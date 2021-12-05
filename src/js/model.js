import { dom } from "./dom"
import { constants } from "./constants"

export default class Model {
    constructor() {
        if (localStorage.getItem(constants.tasks) && localStorage.getItem(constants.id)) {
            this.valuesToDo = JSON.parse(localStorage.getItem(constants.tasks));
            this.createId = JSON.parse(localStorage.getItem(constants.id));
        }
        else {
            this.valuesToDo = [];
            this.createId = [];
        }
    }
    writeTask(newList, newid, checked) {
        const html = dom.taskItemTemplate
            .replace(constants.tempTitle, newList)
            .replace(constants.tempItemid, constants.item.concat(newid))
            .replace(constants.tempValId, constants.val.concat(newid))
            .replace(constants.tempNoProperties, checked);
        return this.htmlToElement(html);
    }
    setData(newValue, newid) {
        this.createId.push(newid);
        this.valuesToDo.push({
            id: newid,
            title: newValue,
            completed: false
        });
        this.apdateTasks();
        this.apdateId();
    }
    deleteData(valueId, idInput, index, value) {
        if (valueId === idInput) {
            this.valuesToDo.splice(index, 1);
            this.createId = this.createId.filter((val) => val != value.id);
        };
        this.apdateTasks();
        this.apdateId();
    }
    reversCheck(idInput) {
        this.valuesToDo.forEach((val) => {
            if (constants.item + val.id === idInput) {
                val.completed = !val.completed;
                this.apdateTasks();
            }
        })
    }
    htmlToElement(html) {
        const template = document.createElement(constants.template);
        html = html.trim();
        template.innerHTML = html;
        return template.content.firstChild;
    }
    generateId(idList) {
        const innerThis = this;
        const temp = Math.floor(Math.random() * (1000 - 1));
        if (idList.includes(temp)) innerThis.generateId(idList);
        return temp;
    }
    
    apdateTasks(){localStorage.setItem(constants.tasks, JSON.stringify(this.valuesToDo))}
    apdateId(){localStorage.setItem(constants.id, JSON.stringify(this.createId))}
}