const todoForm = document.querySelector('.add');
const todoList = document.querySelector('.todos');

const addTodo = newTodo => {
    console.log(newTodo)
};

todoForm.addEventListener('submit', e =>{
    e.preventDefault();
    newTodo = e.target.add.value;
    addTodo(newTodo);
});