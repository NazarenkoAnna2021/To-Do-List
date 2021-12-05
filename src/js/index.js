import '/css/style.css'
import { dom } from './dom'
import View from './view'
import Controller from './controller';


//functions.initList();
const view = new View();
const controller = new Controller();
view.writeLi();

dom.addButton.addEventListener('click', controller.addElem);
dom.toDo.addEventListener('click', controller.deleteElement);
dom.toDo.addEventListener('change', controller.checkTask);