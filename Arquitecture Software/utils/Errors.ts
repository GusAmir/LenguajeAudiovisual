
export class Error {
    constructor(mensaje: string){
        super(mensaje);
        this.mensaje = mensaje;
    }
}

class NotFoundError extends Error {
    constructor(resource: string) {
      super(`${resource} No se encontro`);
      this.mensaje = this.constructor.mensaje;
    }
}

class ValidationError extends Error {
    constructor(message: string) {
      super(`Error de validacion: ${message}`);
      this.mensaje = this.constructor.mensaje;
    }
}

const mensaje = new Error("Este es un error personalizado");