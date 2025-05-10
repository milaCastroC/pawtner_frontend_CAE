export interface Appointment {
    citaId?: number;
    mascotaId: number;
    horarioId: number;
    veterinarioId: number;
    fecha: Date;
    tipoCita: string;
    estado: string;
}
