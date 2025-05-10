export interface ItemHistory {
    itemHistorialId?: number;
    mascotaId: number;
    fecha: Date;
    diagnostico: string;
    tratamiento: string;
    observaciones?: string;
    tipo?: string;
    citaId?: number;
}
