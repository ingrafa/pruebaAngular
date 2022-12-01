import { Persona } from "./persona.model";
import { EventEmitter } from "@angular/core";

export class PersonasService {
  personas: Persona[] = [
    new Persona("Juan", "Perez"),
    new Persona("Vane", "Quive")
  ];
  saludar = new EventEmitter<number>();

  agregarPersona(persona: Persona) {
    this.personas.push(persona);
  }
}
