export interface Pet {
    mascotaId?: number;
    propietarioId: number;
    nombre: string;
    especie: string;
    raza?: string;
    sexo: string;
    fechaNacimiento?: Date;
    edad?: number;
    peso?: number;
}
