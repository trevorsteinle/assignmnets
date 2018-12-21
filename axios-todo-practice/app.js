
const ul = document.querySelector('ul')
const form = document.querySelector('form')
const baseUrl = 'https://api.vschool.io/tt/todo/';

// Request

function addTodo(url, todo) {
    return axios.post(url, todo)
        .then(response => response.data)
}

function getAllTodos(url){
    return axios.get(url)
        .then(response => response.data)
}

function renderTodo(todo){
    // todo is an object
    const li = document.createElement('li');
    const title = document.createElement('h3');
    const description = document.createElement('p');
    const price = document.createElement('p');
    const imgUrl = document.createElement('p');
    const completed = document.createElement('input');
    const deleteBtn = document.createElement('button');

    // modifications
    title.textContent = todo.title;
    description.textContent = todo.description;
    price.textContent = todo.price;
    imgUrl.textContent = todo.imgUrl;
    completed.type = 'checkbox';
    completed.checked = todo.completed;
    deleteBtn.textContent = 'x';
    deleteBtn.addEventListener('click', handleDelete(baseUrl + todo._id, li));
    // deleteBtn.id = todo._id;
    completed.addEventListener('input', handleEdit(baseUrl + todo._id));



    //append to dom
    ul.appendChild(li);
    [title, description, price, imgUrl, completed, deleteBtn].forEach(el => li.appendChild(el))
}

function renderList(todos){
    todos.forEach(renderTodo)

}



getAllTodos(baseUrl)
    .then(renderList);

// form.addEventListener('submit', function(e) {
function handleSubmit(e) {
    e.preventDefault();
    const todo = {
        title: this.title.value,
        description: this.description.value,
        imgUrl: this.imgurl.value,
        price: this.price.value
    }
    addTodo(baseUrl, todo)
    .then(renderTodo)
    .then(() => this.reset)
}


form.addEventListener('submit', handleSubmit)


function handleDelete(url, listItem) {
    // delete todo from server and remove from dom as well
    return e => {
    deleteTodo(url)
        .then(() => listItem.remove())
        // .then(() => e.target.parentNode.remove());
    }
}

function deleteTodo(url) {
    return axios.delete(url)
}

function handleEdit(url) {
    return e => {
        editTodo(url, {completed: e.target.checked} )
    }
}

function editTodo(url, updater){
    return axios.put(url, updater)
       .then(response => response.data)
}