let btn = document.getElementById('sent');
btn.addEventListener('click', addTask);
let quantityLi = [];
let maxLi = 10;
let iconPl = document.createElement('i');
iconPl.className = 'material-icons add';
iconPl.innerHTML = 'add_box';
btn.appendChild(iconPl);
let blockInput = document.getElementById('main-form');
let divWarn = document.getElementById('max');
let delet = document.getElementsByClassName('del');
let warn = document.getElementsByClassName('warning');
let blockTask = document.getElementById('block-task');
const zero = 0;
const one = 1;
function addTask() {
    document.querySelector('#input').focus();
    if (quantityLi.length >= maxLi) {
        blockInput.style.display = 'none';
        if (warn.length < one) {
            let newP = document.createElement('p');
            newP.className = 'warning';
            newP.innerHTML = 'Maximum item per list are created';
            divWarn.appendChild(newP);
        }
    } else {
        let newRow = document.createElement('li');
        newRow.className = 'li';
        newRow.draggable = true;
        let myInput = document.getElementById('input').value.trim();
        if (myInput === '') {
            return alert('Write new action!');            
        } else {
            blockTask.insertBefore(newRow, blockTask.childNodes[zero]);
        }
        let iconSq = document.createElement('i');
        iconSq.className = 'material-icons crop_square';
        iconSq.innerHTML = 'crop_square';
        newRow.appendChild(iconSq);
        iconSq.onclick = function () {
            iconSq.innerHTML = 'check_box';
        }
        let task = document.createTextNode(myInput);
        let divTask = document.createElement('div');
        divTask.className = 'task';
        divTask.appendChild(task);
        newRow.appendChild(divTask);
        quantityLi.push(myInput);
        document.querySelector('#input').value = '';
        let iconDel = document.createElement('i');
        iconDel.className = 'material-icons del';
        iconDel.innerHTML = 'delete';
        newRow.appendChild(iconDel);
        for (let i = 0; i < delet.length; i++) {
            delet[i].onclick = function () {
                let div = this.parentElement;
                quantityLi.pop();
                div.style.display = 'none';
                if (warn.length > zero) {
                    divWarn.removeChild(divWarn.childNodes[zero]);
                }
                blockInput.style.display = 'flex';
            }
        }
        drop(newRow);
    }
}
let drag = null;
function dragStart(event) {
    drag = event.target;
    event.target.style.opacity = '0.6';
}
function dragEnd(event) {
    event.target.style.opacity = '1';
}
function dragOver(event) {
    event.preventDefault();
}
function dragEnter(event) {
    if ('li' === event.target.className) {
        event.target.style.border = '3px dotted #03C03C';
    }
}
function dragLeave(event) {
    event.target.style.border = '';
}
function dragDrop(event) {

    if ('li' === event.target.className) {
        event.target.style.border = '';
        drag.parentNode.removeChild(drag);
        blockTask.insertBefore(drag, event.target);
    }
}
function drop(el) {
    el.addEventListener('dragover', dragOver);
    el.addEventListener('dragstart', dragStart);
    el.addEventListener('dragenter', dragEnter);
    el.addEventListener('drop', dragDrop);
    el.addEventListener('dragleave', dragLeave);
    el.addEventListener('dragend', dragEnd);
}