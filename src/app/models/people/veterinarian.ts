import { Person } from "./person";

export interface Veterinarian extends Person {
    especialidad: string;
    tarjetaProfesional: string;
}
