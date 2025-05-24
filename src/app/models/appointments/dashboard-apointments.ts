import { Pet } from "../pets/pet";
import { Schedule } from "../schedule/schedule";

export interface DashboardAppointment {
    pet: Pet;
    type: string;
    date: string;
    schedule: Schedule;
    duration: number;
}
