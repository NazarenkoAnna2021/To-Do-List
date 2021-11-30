import '/css/style.css'
import { dom } from './dom';
import * as functions from './functions'

functions.initList();

dom.addButton.addEventListener('click', functions.addElem);
dom.toDo.addEventListener('click', functions.deleteElement);
dom.toDo.addEventListener('change', functions.checkTask);