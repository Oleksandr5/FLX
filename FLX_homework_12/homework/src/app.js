const rootNode = document.getElementById('root');
let counter = 0;
const zero = 0;
const todoItems = [];
let numberTask = '';

function mainPage() {
    window.location.hash = '';
    rootNode.innerHTML = '';
    let h1 = document.createElement('h1');
    h1.innerHTML = 'Simple TODO application';
    let btn = document.createElement('button');
    btn.className = 'btn';
    btn.innerHTML = 'Add new task';
    let empty = document.createElement('h2');
    empty.innerHTML = 'TODO is empty';
    let list = document.createElement('ul');
    list.id = 'listUl';
    rootNode.appendChild(h1);
    rootNode.appendChild(btn);
    if (todoItems.length === zero) {
        rootNode.appendChild(empty);
    }
    rootNode.appendChild(list);

    function check(i) {
        let newRow = document.createElement('li');
        let icon = document.createElement('img');
        icon.className = 'icon';
        if (todoItems[i].isDone) {
            icon.src = './assets/img/done-s.png';
        } else {
            icon.src = './assets/img/todo-s.png';
        }
        icon.addEventListener('click', icons);

        function icons() {
            if (todoItems[i].isDone) {
                icon.src = './assets/img/todo-s.png';
                todoItems[i].isDone = false;
                todoItems.push(todoItems[i]);
                todoItems.splice(i, 1);
                mainPage();
            } else {
                icon.src = './assets/img/done-s.png';
                todoItems[i].isDone = true;
                todoItems.push(todoItems[i]);
                todoItems.splice(i, 1);
                mainPage();
            }
        }
        let edit = document.createElement('div');
        edit.className = 'edit';
        edit.innerHTML = todoItems[i].description;
        let iconDel = document.createElement('img');
        iconDel.className = 'del icon';
        iconDel.src = './assets/img/remove-s.jpg';
        newRow.appendChild(icon);
        newRow.appendChild(edit);
        newRow.appendChild(iconDel);
        list.appendChild(newRow);
        let red = document.getElementsByClassName('edit');
        for (let i = 0; i < red.length; i++) {
            red[i].onclick = function () {
                numberTask = 'modifyEtem' + (i + 1);
                window.location.hash = 'modifyEtem' + (i + 1);
            }
        }
        let delet = document.getElementsByClassName('del');
        for (let i = 0; i < delet.length; i++) {
            delet[i].onclick = function () {
                let div = this.parentElement;
                let ul = document.getElementById('listUl');
                ul.removeChild(div);
                todoItems.splice(i, 1);
                if (delet.length === zero) {
                    empty.innerText = 'TODO is empty';
                    rootNode.appendChild(empty);
                }
            }
        }
    }
    for (let i = 0; i < todoItems.length; i++) {
        if (!todoItems[i].isDone || todoItems[i].isDone) {
            check(i);
        }
    }

    function newHashChange() {
        window.location.hash = 'addNewTask';
    }
    btn.addEventListener('click', newHashChange);
}
mainPage();

function addNewItem() {
    let h1 = document.createElement('h1');
    h1.innerHTML = 'Add new task';
    let newTask = document.createElement('input');
    newTask.id = 'input';
    newTask.placeholder = 'Input your task here!';
    newTask.type = 'text';
    let addItem = document.createElement('div');
    addItem.className = 'addItem';
    let cancel = document.createElement('button');
    cancel.className = 'buttonNewItem';
    cancel.innerHTML = 'cancel';
    let saveChanges = document.createElement('button');
    saveChanges.className = 'buttonNewItem';
    saveChanges.innerHTML = 'Save changes';
    rootNode.appendChild(h1);
    rootNode.appendChild(newTask);
    rootNode.appendChild(addItem);
    addItem.appendChild(cancel);
    addItem.appendChild(saveChanges);
    document.querySelector('input').focus();
    cancel.addEventListener('click', cancelHashChange);

    function cancelHashChange() {
        window.location.hash = '';
    }
    saveChanges.addEventListener('click', addTask);

    function addTask() {
        let nameTask = document.getElementById('input').value;
        if (nameTask === '') {
            return alert('Write new action!');
        }
        todoItems.push({
            isDone: false,
            id: counter + 1,
            description: nameTask
        });
        counter++;
        window.location.hash = '';
        return todoItems;
    }
}

function modifyItem() {
    const startWith = 11;
    let num = window.location.hash.substr(startWith);
    num--;
    let h1 = document.createElement('h1');
    h1.innerHTML = 'Modify task';
    let modifyTask = document.createElement('input');
    modifyTask.id = 'modify';
    modifyTask.value = todoItems[num].description;
    let addItem = document.createElement('div');
    addItem.className = 'addItem';
    let cancel = document.createElement('button');
    cancel.className = 'buttonModifyItem';
    cancel.innerHTML = 'cancel';
    let saveChanges = document.createElement('button');
    saveChanges.className = 'buttonModifyItem';
    saveChanges.innerHTML = 'Save changes';
    rootNode.appendChild(h1);
    rootNode.appendChild(modifyTask);
    rootNode.appendChild(addItem);
    addItem.appendChild(cancel);
    addItem.appendChild(saveChanges);
    cancel.addEventListener('click', backHashChange);

    function backHashChange() {
        window.location.hash = '';
    }
    saveChanges.addEventListener('click', saveTask);

    function saveTask() {
        let nameTask = document.getElementById('modify').value;
        if (nameTask === '') {
            return alert('Write new action!');
        }
        todoItems[num].description = nameTask;
        window.location.hash = '';
        return todoItems;
    }
}
window.addEventListener('hashchange', function () {
    if (window.location.hash === '#addNewTask') {
        rootNode.innerHTML = '';
        addNewItem();
    } else if (window.location.hash === '#' + numberTask) {
        rootNode.innerHTML = '';
        modifyItem();
    } else {
        rootNode.innerHTML = '';
        mainPage();
    }
});