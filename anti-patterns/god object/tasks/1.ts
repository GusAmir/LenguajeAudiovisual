class Cinema {
    movies: any[] = [];
    snacks: any[] = [];
    tickets: any[] = [];
    employees: any[] = [];

    // Métodos relacionados con películas
    addMovie(movie: any) {
        this.movies.push(movie);
    }

    // Métodos relacionados con snacks
    buySnack(snack: any) {
        this.snacks.push(snack);
    }

    // Métodos relacionados con entradas
    buyTicket(ticket: any) {
        this.tickets.push(ticket);
    }

    // Métodos relacionados con empleados
    hireEmployee(employee: any) {
        this.employees.push(employee);
    }
}

//----------CON FORMATO--------------//

class Cinema {
    movies: any[] = [];
    snacks: any[] = [];
    tickets: any[] = [];
    employees: any[] = [];

    // Métodos relacionados con películas
    addMovie(movie: any) {
        this.movies.push(movie);
    }

    // Métodos relacionados con snacks
    buySnack(snack: any) {
        this.snacks.push(snack);
    }

    // Métodos relacionados con entradas
    buyTicket(ticket: any) {
        this.tickets.push(ticket);
    }

    // Métodos relacionados con empleados
    hireEmployee(employee: any) {
        this.employees.push(employee);
    }

    // Método que realiza múltiples operaciones
    performOperations() {
        this.processData();
        this.sendDataToNetwork();
        this.saveDataToDatabase();
    }

    processData() {
        // Procesa datos
    }

    sendDataToNetwork() {
        // Envía datos a la red
    }

    saveDataToDatabase() {
        // Guarda datos en la base de datos
    }
}
