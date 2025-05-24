export interface AppointmentFilter {
    veterinarianId: number;
    date: Date;
    status: "Confirmada" | "Cancelada" | "Atendida",
}