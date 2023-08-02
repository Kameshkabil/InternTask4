const textInputField = document.querySelector('#text-input-field');
const addBtn = document.querySelector('#add-btn');
const todosContainer = document.querySelector('.todos-container');

addBtn.addEventListener('click',function(){
    if(textInputField.value.trim().length=='')
        return;
    

    const div = document.createElement('div');
    div.classList.add('todo-item-container');

    todosContainer.appendChild(div);

    const todoText = document.createElement('p');
    todoText.id='todo-text';
    todoText.innerHTML= textInputField.value;

    div.appendChild(todoText)

    const editButton = document.createElement('button');
    editButton.id='edit-btn';

    const editIcon = document.createElement('i')
    
    editIcon.className="fa fa-pencil"
    editButton.appendChild(editIcon);
    div.appendChild(editButton)

    const deleteButton = document.createElement('button')
    deleteButton.id='delete-btn';

    const deleteIcon = document.createElement('i');
    deleteIcon.className="fa fa-trash"
    deleteButton.appendChild(deleteIcon)
    div.appendChild(deleteButton)


    todoText.addEventListener('dblclick',()=>{
        todoText.classList.add('line-through')
        editButton.setAttribute("disabled","disabled");
    })


    editButton.addEventListener('click',()=>{
        textInputField.value=todoText.innerText;
        const parent = editButton.parentElement;
        parent.parentElement.removeChild(parent)
    })


    deleteButton.addEventListener('click',()=>{
        const parent = deleteButton.parentElement;
        parent.parentElement.removeChild(parent)
    })


    textInputField.value="";
})