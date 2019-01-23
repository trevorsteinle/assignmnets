const uuid = require('uuid')

const Todos = function (todo) {
    this._id = uuid();
    this.name = todo.name;
    this.description = todo.description;
    this.imageUrl = todo.imageUrl;
    this.completed = todo.completed;
}

const Database = function () {
    this.todos = [];
}

Database.prototype.find = function () {
    return this.todos
}

Database.prototype.save = function (todo) {
    const newTodos = new Todos(todo);
    this.todos.push(newTodos);
    return newTodos
}

Database.prototype.findByIdAndRemove = function (id) {
    const foundTodo = this.todos.find((todo) => {
        return todo._id === id;
    })

    if (foundTodo === undefined) return;

    const index = this.todos.indexOf(foundTodo);
    this.todos.splice(index, 1)
}

Database.prototype.findByIdAndUpdate = function (id, updates) {
    const foundTodo = this.todos.find(todo => {
        return todo._id === id;
    })
    if (foundTodo === undefined) return;
    const index = this.todos.indexOf(foundTodo);
    const newTodo = { ...foundTodo, ...updates };
    this.todos.splice(index, 1, newTodo);
    return newTodo
}

Database.prototype.findByIdAndReturn = function (id) {
    const foundTodo = this.todos.find(todo => {
        return todo._id === id;
    })
    console.log(foundTodo)
    if (foundTodo === undefined) return;
    // const index = this.todos.indexOf(foundTodo);
    const foundId = { ...foundTodo }
    return foundId
}

module.exports = new Database();