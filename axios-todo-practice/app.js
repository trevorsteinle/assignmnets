
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
    // axios.get('https://api.vschool.io/ben/todo').then(response = response.data)
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
    // delte todo
    return e => {
    deleteTodo(url)
        .then(() => listItem.remove())
        // .then(() => e.target.parentNode.remove());
    }
}

function deleteTodo(url) {
    return axios.delete(url)
}

// click checkbox -> send put request value of completed property

function handleEdit(url) {
    return e => {
        editTodo(url, {completed: e.target.checked} )
    }
}

function editTodo(url, updater){
    return axios.put(url, updater)
       .then(response => response.data)
}

// function removeFromDom(listItem) {
//     ul.removeChild(listItem)
// }




// var request = axios.get('https:/api.vschool.io/ben/todo')

// var nameInput = document.querySelector('.person-todo')


// request
//     .then(function(response){
//         // console.log(response.data)
//         console.log(response.data)
//         response.data.forEach(function(e) {
//             // console.log(e)
//             var pTag = document.createElement('p');
//             var textNode = document.createTextNode(JSON.stringify(e));
//             // var textNode = document.createTextNode(e);
//             pTag.appendChild(textNode);
//             // nameInput.appendChild().innerHTML;
//             nameInput.appendChild(pTag);
//         })

//         // nameInput.innerHTML = JSON.stringify(response.data);
//     })
//     .catch(function(err){
//         console.log(err)
//     })

// // var post = axios.post('https:/api.vschool.io/trevor/todo');

// // post
// //     .then(function(response){
        
// //     })

// // axios.get('https:/api.vschool.io/trevor/todo')
// //   .then(function (response) {
// //     console.log(response);
// //   })
// //   .catch(function (error) {
// //     console.log(error);
// //   });

// //   axios.post('https://api.vschool.io/trevor/todo/', newTodo).then(function(response){
// //     console.log(response.data);
// //   }).catch(function(error){
// //     console.log(error)
// //   });

// axios.get("https://api.vschool.io/trevor/todo/").then(function(response) {
//     var todoList = response.data;
// });


// var deleteTodo = function(singleTodoObject) {
//    // This "singleTodoObject" I passed in has an attribute "_id" I can use to delete it
//    // I just need to add that "_id" to the end of my URL to which I'm sending this DELETE request
//        axios.delete("https://api.vschool.io/trevor/todo/" + singleTodoObject._id).then(function(response) {
//            // This made a DELETE request to "https://api.vschool.io/jonsmith/todo/5630dcfcac2dfab2428b8c02"
//            // Assuming I used the object from the example above.
//            alert("Your todo was successfully deleted!")
//        }, function(response) {
//            alert("There was a problem deleting your todo :(");
//        });
//    };



//    axios.delete("https://api.vschool.io/trevor/todo/" + '5c1967c34a6c3068be76b7d2').then(function(response) {
//            // This made a DELETE request to "https://api.vschool.io/jonsmith/todo/5630dcfcac2dfab2428b8c02"
//            // Assuming I used the object from the example above.
//            alert("Your todo was successfully deleted!")
//        }, function(response) {
//            alert("There was a problem deleting your todo :(");
//        });









// //GLOBAL DOM ELEMENTS
// const ul = document.querySelector('ul');
// const form = document.querySelector('form');

// //URL
// const baseUrl = 'https://api.vschool.io/ben/todo/';

// //REQUESTS

// //GET
// function getAllTodos(url) {
//     return axios.get(url)
//         .then(response => response.data)
// }
// //POST
// function addTodo(todo, url) {
//     return axios.post(url, todo)
//         .then(response => response.data);
// }
// //EDIT
// function editTodo(url, updater) {
//     return axios.put(url, updater)
//         .then(response => response.data);
// }
// //DELETE
// function deleteTodo(url) {
//     return axios.delete(url)
// }

// //HELPERS (render data, handle events)
// function renderList(todos) {
//     todos.forEach(renderTodo)
// }

// function genElement(template) {
//     const el = document.createElement(template.element);
//     for (key in template.attributes) {
//         el[key] = template.attributes[key];
//     }
//     for (key in template.eventListeners) {
//         const config = template.eventListeners[key];
//         el.addEventListener(config.event, config.cb);
//     }
//     template.children && template.children.forEach(child => el.append(genElement(child)));
//     return el;
// }

// function convertToTemplate(todo) {
//     return {
//         element: 'li',
//         attributes: {
//             id: todo._id
//         },
//         children: [
//             {
//                 element: 'h3',
//                 attributes: {
//                     textContent: todo.title
//                 }
//             }, {
//                 element: 'p',
//                 attributes: {
//                     textContent: todo.description
//                 }
//             }, {
//                 element: 'p',
//                 attributes: {
//                     textContent: todo.price
//                 }
//             }, {
//                 element: 'input',
//                 attributes: {
//                     type: 'checkbox',
//                     checked: todo.completed
//                 },
//                 eventListeners: [{
//                     event: 'input',
//                     cb: handleEdit(baseUrl + todo._id)
//                 }]
//             }, {
//                 element: 'button',
//                 attributes: {
//                     textContent: 'X'
//                 },
//                 eventListeners: [{
//                     event: 'click',
//                     cb: handleDelete(baseUrl + todo._id, todo._id)
//                 }]
//             }
//         ]
//     }
// }

// function renderTodo(todo) {
//     ul.appendChild(genElement(convertToTemplate(todo)))
// }

// //EVENT HANDLERS
// function handleSubmit(e) {
//     e.preventDefault();
//     const todo = {
//         title: this.title.value,
//         description: this.description.value,
//         imgUrl: this.imgUrl.value,
//         price: this.price.value
//     }
//     addTodo(todo, baseUrl)
//         .then(renderTodo)
//         .then(() => this.reset());
// }
// function handleDelete(url, id) {
//     //delete todo from server
//     return e => {
//         deleteTodo(url)
//             //remove li from DOM
//             .then(() => document.getElementById(id).remove());
//     }
// }
// function handleEdit(url) {
//     return e => {
//         editTodo(url, { completed: e.target.checked })
//     }
// }

// //GET ALL THE TODOS INITIALLY WHEN THE APP LOADS

// getAllTodos(baseUrl)
//     .then(renderList);

// // ALLOW USER TO ADD NEW TODOS
// form.addEventListener('submit', handleSubmit)