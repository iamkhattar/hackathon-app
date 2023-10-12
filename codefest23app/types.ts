export type User = {
    email: string;
    first_name: string;
    last_name: string;
    type: "worker" | "manager"
    jwt: string;
}

export type Appointment = {
    end_time: string;
    long: number;
    appointment_status: string | null;
    start_time: string;
    id: number;
    lat: number;
    address: string;
    severity_status: string | null;
    client: Client;
    worker: Worker;
}

export type Client = {
    email: string;
    first_name: string;
    last_name: string;
    phone: string;
    id: number;
}

export type Worker = {
    type: string;
    first_name: string;
    email: string;
    last_name: string;
    id: number;
    phone: string;
}