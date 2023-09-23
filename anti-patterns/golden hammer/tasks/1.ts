class TodoManager {
    private todos: string[] = [];

    add(todo: string) {
        this.todos.push(todo);
        this.save();
        this.render();
    }

    remove(index: number) {
        this.todos.splice(index, 1);
        this.save();
        this.render();
    }

    private save() {
        console.log("Saving todos to local storage...");
        // Código para guardar todos en el almacenamiento local
    }

    private render() {
        console.log("Rendering todos in the UI...");
        // Código para renderizar todos en la UI
    }
}

//---------------CON FORMATO---------------------//
class TodoManager {
    private todos: string[] = [];

    operate(todo: string, index: number) {
        this.todos.push(todo);
        this.todos.splice(index, 1);
        this.saveAndRender();
    }

    private saveAndRender() {
        console.log("Performing God hammer operation...");
        console.log("Saving todos to local storage...");
        // Código para guardar todos en el almacenamiento local

        console.log("Rendering todos in the UI...");
        // Código para renderizar todos en la UI
    }
}

