import { Person } from "./person";

export interface User extends Person {
    username: string;
    password?: string;
    rol: string;
}
