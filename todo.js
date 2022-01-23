const todoForm = document.querySelector('.add');
const todoList = document.querySelector('.todos');
const search = document.querySelector('.search');
//add new todos
const addTodo = newTodo => {
    const li = document.createElement('li');
    li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    li.innerHTML = `<span>${newTodo}</span> \n <i class="far fa-trash-alt delete"></i>`;
    todoList.appendChild(li);
};

todoForm.addEventListener('submit', e =>{
    e.preventDefault();
    newTodo = e.target.add.value.trim();
    if(newTodo.length){
        addTodo(newTodo);
    }
    todoForm.reset();
});

//delete todo

todoList.addEventListener('click', e =>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

//search todo
const filter = searchKey => {
    Array.from(todoList.children).filter(todo =>{
        return !todo.textContent.toLowerCase().includes(searchKey)
    }).forEach(todo => {
        todo.classList.add('filtered');
    });
    Array.from(todoList.children).filter(todo =>{
        return todo.textContent.toLowerCase().includes(searchKey)
    }).forEach(todo => {
        todo.classList.remove('filtered');
    });

};
search.addEventListener('keyup', e =>{
    e.preventDefault();
    const searchKey = e.target.value.trim().toLowerCase();
    filter(searchKey);
});
